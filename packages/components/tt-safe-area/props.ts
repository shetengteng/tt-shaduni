import type { ExtractPropTypes, PropType } from 'vue'

export const safeAreaProps = {
  position: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'bottom',
  },
} as const

export type TtSafeAreaProps = ExtractPropTypes<typeof safeAreaProps>
