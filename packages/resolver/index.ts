export interface TtUIResolverOptions {
  importStyle?: boolean | 'css'
  prefix?: string
}

interface ComponentInfo {
  name: string
  from: string
  sideEffects?: string[]
}

const componentDeps: Record<string, string[]> = {
  'tt-form': ['tt-form-item'],
  'tt-collapse': ['tt-collapse-item'],
  'tt-checkbox-group': ['tt-checkbox'],
  'tt-radio-group': ['tt-radio'],
  'tt-grid': ['tt-col', 'tt-row'],
  'tt-config-provider': [],
}

function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function getSideEffects(kebab: string, opts: TtUIResolverOptions): string[] {
  if (!opts.importStyle) return []
  return [`tt-shaduni/es/components/${kebab}/style`]
}

function resolveComponent(
  name: string,
  opts: TtUIResolverOptions,
): ComponentInfo | undefined {
  const prefix = opts.prefix ?? 'Tt'
  if (!name.startsWith(prefix)) return undefined

  const kebab = 'tt-' + kebabCase(name.slice(prefix.length))
  const sideEffects = getSideEffects(kebab, opts)

  const deps = componentDeps[kebab]
  if (deps) {
    for (const dep of deps) {
      sideEffects.push(...getSideEffects(dep, opts))
    }
  }

  return {
    name,
    from: 'tt-shaduni',
    sideEffects: sideEffects.length > 0 ? sideEffects : undefined,
  }
}

export function TtUIResolver(options: TtUIResolverOptions = {}) {
  const opts: TtUIResolverOptions = {
    importStyle: true,
    prefix: 'Tt',
    ...options,
  }

  return {
    type: 'component' as const,
    resolve: (name: string) => resolveComponent(name, opts),
  }
}

export { componentDeps }
