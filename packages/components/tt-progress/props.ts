import type { ExtractPropTypes, PropType } from 'vue'

export const progressProps = {
  percentage: {
    type: Number,
    default: 0,
  },
  strokeWidth: {
    type: Number,
    default: 8,
  },
  color: {
    type: String,
    default: '',
  },
  showText: {
    type: Boolean,
    default: true,
  },
} as const

export type TtProgressProps = ExtractPropTypes<typeof progressProps>
