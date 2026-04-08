import type { ExtractPropTypes, PropType } from 'vue'

export const tabsProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: 0,
  },
  items: {
    type: Array as PropType<Array<{ label: string; value: string | number; disabled?: boolean }>>,
    default: () => [],
  },
} as const

export type TabsProps = ExtractPropTypes<typeof tabsProps>
