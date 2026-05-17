import type { ExtractPropTypes, PropType } from 'vue'

export const searchProps = {
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  showCancel: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<'default' | 'ghost'>,
    default: 'default',
  },
}

export type TtSearchProps = ExtractPropTypes<typeof searchProps>
