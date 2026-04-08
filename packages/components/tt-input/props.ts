import type { ExtractPropTypes, PropType } from 'vue'

export type InputType = 'text' | 'password' | 'number' | 'digit' | 'tel'

export const inputProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  maxlength: {
    type: Number,
    default: -1,
  },
}

export type InputProps = ExtractPropTypes<typeof inputProps>
