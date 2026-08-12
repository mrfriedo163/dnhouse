import fs from 'node:fs';
import path from 'node:path';
import { DIRS, ensureDirs, manifestPath, parseArgs } from './lib/config.mjs';
import { readJson, writeJsonAtomic, existsNonEmpty } from './lib/files.mjs';
import { chat, extractJson } from './lib/gateway.mjs';
import { findDuplicates } from './lib/dedupe.mjs';
import { runPool } from './lib/pool.mjs';
import { SYSTEM, researchPrompt } from './lib/prompts.mjs';

ensureDirs();
const args = parseArgs();
const file = manifestPath(args.manifest);
const manifest = readJson(file);
const duplicates = findDuplicates(manifest.items);
if (duplicates.length) throw new Error(`Manifest dedupe failed: ${JSON.stringify(duplicates)}`);
const charter = fs.readFileSync(path.join(DIRS.manifests, '..', 'editorial-charter.md'), 'utf8');
const limit = Math.max(1, Number(args.limit || manifest.items.length));
const concurrency = Math.min(4, Math.max(1, Number(args.concurrency || 4)));
const pending = manifest.items.filter((x) => x.status.research !== 'complete').slice(0, limit);

const results = await runPool(pending, concurrency, async (item) => {
  const output = path.join(DIRS.research, `${item.slug}.json`);
  if (existsNonEmpty(output)) return { slug: item.slug, skipped: 'checkpoint exists' };
  const response = await chat({
    messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: researchPrompt(item, charter) }],
    maxTokens: 6500,
    beforeRetry: () => existsNonEmpty(output),
  });
  if (response.checkpointed) return { slug: item.slug, skipped: 'checkpoint appeared before retry' };
  const research = extractJson(response.content);
  if (research.slug !== item.slug || !Array.isArray(research.sources)) throw new Error('Research JSON violates contract');
  writeJsonAtomic(output, research);
  item.status.research = 'complete';
  writeJsonAtomic(file, manifest);
  return { slug: item.slug, file: output };
});

const failed = results.filter((x) => !x.ok);
console.log(`Research wave ${manifest.waveId}: requested=${pending.length} completed=${results.length - failed.length} failed=${failed.length} files=${pending.filter((x) => existsNonEmpty(path.join(DIRS.research, `${x.slug}.json`))).length}`);
for (const row of failed) console.error(`${row.item.slug}: ${row.error}`);
if (failed.length) process.exitCode = 1;

