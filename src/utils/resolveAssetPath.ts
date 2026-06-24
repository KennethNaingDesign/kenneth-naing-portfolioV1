const assetModules = import.meta.glob("/src/assets/images/**/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function resolveAssetPath(path: string): string {
  if (!path.startsWith("/src/assets/images/")) {
    return path;
  }

  return assetModules[path] ?? path;
}
