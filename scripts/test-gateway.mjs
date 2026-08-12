import { chat } from './lib/gateway.mjs';

const result = await chat({
  messages: [
    { role: 'system', content: 'Trả lời chính xác theo yêu cầu, không thêm ký tự.' },
    { role: 'user', content: 'Chỉ trả đúng OK.' },
  ],
  maxTokens: 8,
  timeoutMs: 30_000,
  attempts: 2,
});

if (result.status !== 200 || result.content.trim() !== 'OK') {
  throw new Error(`Smoke test failed: HTTP ${result.status}, unexpected body`);
}

console.log('Gateway smoke test: HTTP 200, response parsed, exact OK received.');
