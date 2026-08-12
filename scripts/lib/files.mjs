import fs from 'node:fs';
import path from 'node:path';

export function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }

export function writeJsonAtomic(file, value) {
  const tmp = `${file}.${process.pid}.tmp`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(tmp, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  fs.renameSync(tmp, file);
}

export function writeTextAtomic(file, value) {
  const tmp = `${file}.${process.pid}.tmp`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(tmp, value, 'utf8');
  fs.renameSync(tmp, file);
}

export function existsNonEmpty(file) {
  try { return fs.statSync(file).size > 0; } catch { return false; }
}

export function listFiles(dir, suffix) {
  try { return fs.readdirSync(dir).filter((x) => x.endsWith(suffix)); } catch { return []; }
}

const yamlScalar = (value) => JSON.stringify(String(value));
export function normalizeDraftMetadata(text, item) {
  const end = text.indexOf('\n---', 4);
  if (!text.startsWith('---\n') || end < 0) throw new Error('Cannot normalize missing YAML front matter');
  let front = text.slice(4, end);
  const fields = {
    title: item.title,
    slug: item.slug,
    category: item.category,
    primaryEntity: item.primaryEntity,
    searchIntent: item.searchIntent,
    contentType: item.contentType,
    stainType: item.stainType,
    garmentType: item.garmentType,
    colorClass: item.colorClass,
    material: item.material,
    stainAge: Array.isArray(item.stainAge) ? item.stainAge.join(', ') : item.stainAge,
    treatmentRisk: item.treatmentRisk,
    parentHub: item.parentHub,
    canonical: `https://www.giatsaycantho.vn/thu-vien/${item.slug}`,
    status: 'draft',
    updatedAt: new Date().toISOString().slice(0, 10),
  };
  for (const [key, value] of Object.entries(fields)) {
    const line = `${key}: ${yamlScalar(value)}`;
    const re = new RegExp(`^${key}:.*$`, 'm');
    front = re.test(front) ? front.replace(re, line) : `${front}\n${line}`;
  }
  let body = text.slice(end + 4);
  body = body.replace(/^# .+$/m, `# ${item.title}`);
  return `---\n${front.trim()}\n---${body}`;
}
