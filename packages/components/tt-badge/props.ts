import type { ExtractPropTypes, PropType } from 'vue'

export const badgeProps = {
  value: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
    default: 99,
  },
  dot: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
}

export type TtBadgeProps = ExtractPropTypes<typeof badgeProps>
