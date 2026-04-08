/**
 * Convert camelCase token key to --tt-kebab-case CSS variable name.
 * e.g. "primaryForeground" → "--tt-primary-foreground"
 */
export function tokenToVar(key: string): string {
  const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase()
  return `--tt-${kebab}`
}

/**
 * Convert a token record to a CSS style string for inline injection.
 * e.g. { primary: '#171717' } → "--tt-primary: #171717"
 */
export function tokensToStyle(tokens: Record<string, string>): string {
  return Object.entries(tokens)
    .map(([key, val]) => `${tokenToVar(key)}: ${val}`)
    .join(';')
}

/**
 * Compute diff between two token records. Returns only entries in `next`
 * that differ from `base`.
 */
export function diffTokens(
  base: Record<string, string>,
  next: Record<string, string>,
): Record<string, string> {
  const diff: Record<string, string> = {}
  for (const [key, val] of Object.entries(next)) {
    if (base[key] !== val) {
      diff[key] = val
    }
  }
  return diff
}
