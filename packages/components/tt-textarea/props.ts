import type { ExtractPropTypes, PropType } from 'vue'

export const textareaProps = {
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  maxlength: {
    type: Number,
    default: -1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autoHeight: {
    type: Boolean,
    default: false,
  },
  showCount: {
    type: Boolean,
    default: false,
  },
} as const

export type TtTextareaProps = ExtractPropTypes<typeof textareaProps>
