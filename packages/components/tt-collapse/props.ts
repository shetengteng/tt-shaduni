import type { ExtractPropTypes, PropType } from 'vue'

export const collapseProps = {
  modelValue: {
    type: Array,
    default: () => [],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
} as const

export type TtCollapseProps = ExtractPropTypes<typeof collapseProps>
