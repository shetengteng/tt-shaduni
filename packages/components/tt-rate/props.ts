import type { ExtractPropTypes, PropType } from 'vue'

export const rateProps = {
  modelValue: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 5,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  size: {
    type: [String, Number],
    default: 20,
  },
} as const

export type TtRateProps = ExtractPropTypes<typeof rateProps>
