const illustratedIds = new Set([
  "bride-001",
  "bride-002",
  "bride-003",
  "bride-004",
  "bride-005",
  "bride-006",
  "bride-007",
  "bride-014",
  "groom-001",
  "groom-002",
  "groom-003",
  "acc-001",
  "acc-002",
  "acc-010",
  "guodali-001",
  "guodali-003",
  "guodali-012",
  "tea-001",
  "tea-004",
  "bed-001",
  "decor-001"
]);

export function productIllustration(id: string) {
  if (!illustratedIds.has(id)) return null;
  const base = '/media/products/' + id;
  return { thumbnail: base + '-480.webp', detail: base + '-960.webp' };
}
