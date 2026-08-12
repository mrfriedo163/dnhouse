import fs from 'node:fs';
import path from 'node:path';
import { DIRS, ensureDirs, manifestPath, parseArgs } from './lib/config.mjs';
import { readJson, writeJsonAtomic, writeTextAtomic, existsNonEmpty } from './lib/files.mjs';
import { chat } from './lib/gateway.mjs';
import { findDuplicates } from './lib/dedupe.mjs';
import { runPool } from './lib/pool.mjs';
import { SYSTEM, writerPrompt } from './lib/prompts.mjs';

ensureDirs();
const args = parseArgs();
const file = manifestPath(args.manifest);
const manifest = readJson(file);
const duplicates = findDuplicates(manifest.items);
if (duplicates.length) throw new Error(`Manifest dedupe failed: ${JSON.stringify(duplicates)}`);
const charter = fs.readFileSync(path.join(DIRS.manifests, '..', 'editorial-charter.md'), 'utf8');
const limit = Math.max(1, Number(args.limit || manifest.items.length));
const concurrency = Math.min(16, Math.max(1, Number(args.concurrency || 16)));
const pending = manifest.items.filter((x) => x.status.research === 'complete' && x.status.writing !== 'complete').slice(0, limit);

const results = await runPool(pending, concurrency, async (item) => {
  const researchFile = path.join(DIRS.research, `${item.slug}.json`);
  const output = path.join(DIRS.drafts, `${item.slug}.mdx`);
  if (existsNonEmpty(output)) return { slug: item.slug, skipped: 'checkpoint exists' };
  if (!existsNonEmpty(researchFile)) throw new Error('Research checkpoint missing');
  const research = readJson(researchFile);
  const response = await chat({
    messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: writerPrompt(item, research, charter) }],
    temperature: 0.35,
    maxTokens: 9000,
    beforeRetry: () => existsNonEmpty(output),
  });
  if (response.checkpointed) return { slug: item.slug, skipped: 'draft appeared before retry' };
  const draft = response.content.trim().replace(/^```(?:mdx|markdown)?\s*/i, '').replace(/\s*```$/, '') + '\n';
  writeTextAtomic(output, draft);
  item.status.writing = 'complete';
  writeJsonAtomic(file, manifest);
  return { slug: item.slug, file: output };
});

const failed = results.filter((x) => !x.ok);
console.log(`Writer wave ${manifest.waveId}: requested=${pending.length} completed=${results.length - failed.length} failed=${failed.length} files=${pending.filter((x) => existsNonEmpty(path.join(DIRS.drafts, `${x.slug}.mdx`))).length}`);
for (const row of failed) console.error(`${row.item.slug}: ${row.error}`);
if (failed.length) process.exitCode = 1;

