const fold = (value = '') => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const tokens = (value) => new Set(fold(value).split(/\s+/).filter((x) => x.length > 1));
const jaccard = (a, b) => {
  const aa = tokens(a), bb = tokens(b);
  const intersection = [...aa].filter((x) => bb.has(x)).length;
  return intersection / Math.max(1, new Set([...aa, ...bb]).size);
};

export function findDuplicates(items) {
  const issues = [];
  for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
    const a = items[i], b = items[j];
    const exact = ['slug', 'title', 'primaryEntity'].filter((key) => fold(a[key]) === fold(b[key]));
    const facets = ['stainType', 'garmentType', 'colorClass', 'material', 'contentType'];
    const sameFacets = facets.every((key) => fold(a[key] ?? '') === fold(b[key] ?? ''));
    const intent = jaccard(a.searchIntent, b.searchIntent);
    const scope = jaccard((a.knowledgeScope || []).join(' '), (b.knowledgeScope || []).join(' '));
    const entity = jaccard(a.primaryEntity, b.primaryEntity);
    // Generic editorial phrasing in intent/scope must not make distinct brands,
    // sports, or audiences collide. Semantic blocking requires a near-identical
    // primary entity plus strongly overlapping intent and scope.
    if (exact.length || sameFacets || (entity >= 0.78 && intent >= 0.7 && scope >= 0.65)) {
      issues.push({ a: a.slug, b: b.slug, exact, scores: { entity, intent, scope } });
    }
  }
  return issues;
}
