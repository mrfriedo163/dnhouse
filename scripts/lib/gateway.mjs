import { setTimeout as sleep } from 'node:timers/promises';
import { getConfig } from './config.mjs';

function retryAfterMs(response, attempt) {
  const value = response?.headers?.get('retry-after');
  if (value && /^\d+(\.\d+)?$/.test(value)) return Number(value) * 1000;
  return Math.min(60_000, 1500 * (2 ** attempt)) + Math.floor(Math.random() * 750);
}

export async function chat({ messages, temperature = 0.2, maxTokens = 6000, timeoutMs = 120_000, beforeRetry, attempts = 5 }) {
  const cfg = getConfig();
  for (let attempt = 0; attempt < attempts; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let response;
    try {
      response = await fetch(cfg.endpoint, {
        method: 'POST',
        headers: { Authorization: `Bearer ${cfg.apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: cfg.model, messages, temperature, max_tokens: maxTokens }),
        signal: controller.signal,
      });
      if (response.ok) {
        const data = await response.json();
        const content = data?.choices?.[0]?.message?.content;
        if (typeof content !== 'string') throw new Error('Gateway response has no choices[0].message.content');
        return { content, status: response.status, model: data.model || cfg.model, usage: data.usage || null };
      }
      const retryable = response.status === 429 || response.status === 499 || response.status >= 500;
      if (!retryable || attempt === attempts - 1) throw new Error(`Gateway HTTP ${response.status}`);
      if (await beforeRetry?.({ status: response.status, attempt })) return { checkpointed: true };
      await sleep(retryAfterMs(response, attempt));
    } catch (error) {
      const retryable = error.name === 'AbortError' || error instanceof TypeError;
      if (!retryable || attempt === attempts - 1) throw error;
      if (await beforeRetry?.({ status: error.name === 'AbortError' ? 499 : 0, attempt })) return { checkpointed: true };
      await sleep(Math.min(60_000, 1500 * (2 ** attempt)) + Math.floor(Math.random() * 750));
    } finally { clearTimeout(timer); }
  }
  throw new Error('Gateway attempts exhausted');
}

export function extractJson(text) {
  const cleaned = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  try { return JSON.parse(cleaned); } catch {}
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start >= 0 && end > start) return JSON.parse(cleaned.slice(start, end + 1));
  throw new Error('Model output is not valid JSON');
}

