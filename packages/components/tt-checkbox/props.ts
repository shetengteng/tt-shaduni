import type { ExtractPropTypes, PropType } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export type TtCheckboxProps = ExtractPropTypes<typeof checkboxProps>
