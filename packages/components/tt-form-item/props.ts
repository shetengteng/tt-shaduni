import type { ExtractPropTypes, PropType } from 'vue'

export const formItemProps = {
  label: {
    type: String,
    default: '',
  },
  prop: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
}

export type TtFormItemProps = ExtractPropTypes<typeof formItemProps>
