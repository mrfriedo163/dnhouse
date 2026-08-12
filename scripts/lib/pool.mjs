export async function runPool(items, concurrency, handler) {
  const queue = [...items];
  const results = [];
  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      try { results.push({ item, ok: true, value: await handler(item) }); }
      catch (error) { results.push({ item, ok: false, error: error.message }); }
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length || 1) }, worker));
  return results;
}

