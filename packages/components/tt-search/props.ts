import type { ExtractPropTypes, PropType } from 'vue'

export const searchProps = {
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Search',
  },
  showCancel: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export type TtSearchProps = ExtractPropTypes<typeof searchProps>
