import type { ExtractPropTypes, PropType } from 'vue'

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<'sm' | 'md'>,
    default: 'md',
  },
}

export type TtSwitchProps = ExtractPropTypes<typeof switchProps>
