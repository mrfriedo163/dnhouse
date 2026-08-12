import fs from 'node:fs';
import path from 'node:path';
import { DIRS, ensureDirs, manifestPath, parseArgs } from './lib/config.mjs';
import { readJson, writeJsonAtomic, listFiles } from './lib/files.mjs';
import { findDuplicates } from './lib/dedupe.mjs';

ensureDirs();
const args = parseArgs();
const file = manifestPath(args.manifest);
const manifest = readJson(file);
const allowed = new Set(['tay-vet-ban', 'cham-soc-quan-ao', 'giat-chan-men', 've-sinh-giay', 'giat-rem-cua', 'kien-thuc-giat-say']);
const report = { waveId: manifest.waveId, generatedAt: new Date().toISOString(), counts: {}, duplicates: findDuplicates(manifest.items), items: [] };
const auditItems = args.limit ? manifest.items.slice(0, Math.max(1, Number(args.limit))) : manifest.items;

for (const item of auditItems) {
  const draftFile = path.join(DIRS.drafts, `${item.slug}.mdx`);
  const errors = [];
  const warnings = [];
  if (!fs.existsSync(draftFile)) errors.push('draft_missing');
  else {
    const body = fs.readFileSync(draftFile, 'utf8');
    const h1 = [...body.matchAll(/^# (.+)$/gm)].map((match) => match[1].trim());
    if (!body.startsWith('---\n')) errors.push('frontmatter_missing');
    const required = ['title', 'slug', 'description', 'category', 'primaryEntity', 'searchIntent', 'contentType', 'stainType', 'garmentType', 'colorClass', 'material', 'stainAge', 'treatmentRisk', 'parentHub', 'canonical', 'sources', 'status', 'updatedAt'];
    for (const field of required) if (!new RegExp(`^${field}:`, 'm').test(body)) errors.push(`metadata_${field}_missing`);
    if (h1.length !== 1) errors.push('h1_count_invalid');
    else if (h1[0] !== item.title) errors.push('h1_title_mismatch');
    const canonical = `https://www.giatsaycantho.vn/thu-vien/${item.slug}`;
    if (!body.split(/\r?\n/).some((line) => line.replace(/["']/g, '').trim() === `canonical: ${canonical}`)) errors.push('canonical_mismatch');
    if (!allowed.has(item.category)) errors.push('category_invalid');
    if (![null, 'trắng', 'màu'].includes(item.colorClass)) errors.push('color_class_invalid');
    if ((body.match(/^## /gm) || []).length < 5) warnings.push('structure_shallow');
    if (body.length < 4500) warnings.push('draft_short');
    if (/```|<\/?[a-z][^>]*>/i.test(body)) errors.push('raw_markup_detected');
    if (/\b(mua ngay|click here|đặt hàng ngay|sạch 100%)\b/i.test(body)) errors.push('unsafe_or_sales_claim');
    if (/trộn.{0,30}(thuốc tẩy|javel).{0,30}(amoniac|giấm|axit)|trộn.{0,30}(amoniac|giấm|axit).{0,30}(thuốc tẩy|javel)/i.test(body)) errors.push('dangerous_mixture_instruction');
    if (!/^## Nguồn tham khảo\s*$/m.test(body)) errors.push('sources_section_missing');
    const urls = [...body.matchAll(/https:\/\/[^\s)\]"']+/g)].map((match) => match[0]);
    if (urls.length < 2) warnings.push('too_few_source_urls');
    warnings.push('source_urls_require_retrieval_or_human_verification');
    if (item.treatmentRisk === 'high' && item.status.humanReview !== 'complete') warnings.push('human_review_required');
  }
  item.status.qa = errors.length ? 'failed' : 'passed';
  report.items.push({ slug: item.slug, errors, warnings });
}

report.counts = {
  manifestItems: auditItems.length,
  researchFiles: listFiles(DIRS.research, '.json').length,
  draftFiles: listFiles(DIRS.drafts, '.mdx').length,
  passed: report.items.filter((item) => !item.errors.length).length,
  failed: report.items.filter((item) => item.errors.length).length,
};
writeJsonAtomic(file, manifest);
const reportFile = path.join(DIRS.reports, `${manifest.waveId}-qa.json`);
writeJsonAtomic(reportFile, report);
console.log(`QA ${manifest.waveId}: manifest=${report.counts.manifestItems} research=${report.counts.researchFiles} drafts=${report.counts.draftFiles} passed=${report.counts.passed} failed=${report.counts.failed}`);
console.log(`Report: ${reportFile}`);
if (report.counts.failed || report.duplicates.length) process.exitCode = 1;

