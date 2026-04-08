import type { ExtractPropTypes, PropType } from 'vue'

export const spaceProps = {
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  size: {
    type: [String, Number],
    default: 8,
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end' | 'baseline'>,
    default: 'start',
  },
} as const

export type TtSpaceProps = ExtractPropTypes<typeof spaceProps>
