import type { ExtractPropTypes, PropType } from 'vue'

export const configProviderProps = {
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: undefined,
  },
  themeVars: {
    type: Object as PropType<Record<string, string>>,
    default: () => ({}),
  },
}

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
