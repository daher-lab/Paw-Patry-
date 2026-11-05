/** Public files keep working on the local site and on GitHub Pages. */
export function publicUrl(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}
