import type { ExtractPropTypes, PropType } from 'vue'

export type TransitionName = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom'

export const transitionProps = {
  show: { type: Boolean, default: false },
  name: { type: String as PropType<TransitionName>, default: 'fade' },
  duration: { type: Number, default: 300 },
}

export type TransitionProps = ExtractPropTypes<typeof transitionProps>
