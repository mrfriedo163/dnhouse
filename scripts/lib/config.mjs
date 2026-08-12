import fs from 'node:fs';
import path from 'node:path';

export const ROOT = process.cwd();
export const DEV = path.join(ROOT, 'content-development');
export const DIRS = {
  manifests: path.join(DEV, 'manifests'),
  research: path.join(DEV, 'research'),
  drafts: path.join(DEV, 'drafts'),
  reports: path.join(DEV, 'reports'),
};

function loadEnvFile(file) {
  if (!file || !fs.existsSync(file)) return false;
  for (const raw of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const i = line.indexOf('=');
    if (i < 1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (!(key in process.env)) process.env[key] = value;
  }
  return true;
}

function loadLocalEnv() {
  loadEnvFile(path.join(ROOT, '.env.content.local'));
  const sharedFile = process.env.CONTENT_PIPELINE_ENV_FILE;
  return loadEnvFile(sharedFile || path.join(ROOT, '.env.openai.local'));
}

export function getConfig({ requireKey = true } = {}) {
  const envFileFound = loadLocalEnv();
  const apiKey = process.env.OPENAI_API_KEY;
  if (requireKey && !apiKey) throw new Error('OPENAI_API_KEY is missing. Configure CONTENT_PIPELINE_ENV_FILE in .env.content.local.');
  return {
    apiKey,
    envFileFound,
    endpoint: `${(process.env.OPENAI_BASE_URL || 'https://api.nghimmo.com/v1').replace(/\/$/, '')}/chat/completions`,
    model: process.env.OPENAI_MODEL || 'nghi/gpt-5.6-luna',
  };
}

export function ensureDirs() {
  for (const dir of Object.values(DIRS)) fs.mkdirSync(dir, { recursive: true });
}

export function parseArgs(argv = process.argv.slice(2)) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith('--')) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    args[key] = next && !next.startsWith('--') ? argv[++i] : true;
  }
  return args;
}

export function manifestPath(value) {
  if (!value) return path.join(DIRS.manifests, 'dn-house-pilot-001.json');
  return path.resolve(ROOT, value);
}
