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
}

export type TtCollapseProps = ExtractPropTypes<typeof collapseProps>
