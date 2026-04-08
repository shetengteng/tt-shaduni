import type { ExtractPropTypes, PropType } from 'vue'

export const radioProps = {
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
} as const

export type TtRadioProps = ExtractPropTypes<typeof radioProps>
