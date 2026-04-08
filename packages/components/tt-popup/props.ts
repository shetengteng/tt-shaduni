import type { ExtractPropTypes, PropType } from 'vue'

export type PopupPosition = 'center' | 'top' | 'bottom' | 'left' | 'right'

export const popupProps = {
  show: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String as PropType<PopupPosition>,
    default: 'center',
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 300,
  },
} as const

export type PopupProps = ExtractPropTypes<typeof popupProps>
