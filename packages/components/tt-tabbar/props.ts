import type { ExtractPropTypes, PropType } from 'vue'

export const tabbarProps = {
  modelValue: {
    type: Number,
    default: 0,
  },
  fixed: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true,
  },
} as const

export type TtTabbarProps = ExtractPropTypes<typeof tabbarProps>
