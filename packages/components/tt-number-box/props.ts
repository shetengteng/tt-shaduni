import type { ExtractPropTypes, PropType } from 'vue'

export const numberBoxProps = {
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 99999,
  },
  step: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export type TtNumberBoxProps = ExtractPropTypes<typeof numberBoxProps>
