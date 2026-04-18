import type { ExtractPropTypes, PropType } from 'vue'

export type NotifyType = 'info' | 'success' | 'warning' | 'error' | 'primary'
export type NotifyPosition = 'top' | 'bottom'

export const notifyProps = {
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<NotifyType>,
    default: 'info',
  },
  duration: {
    type: Number,
    default: 2500,
  },
  position: {
    type: String as PropType<NotifyPosition>,
    default: 'top',
  },
  safeAreaInsetTop: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '',
  },
}

export type TtNotifyProps = ExtractPropTypes<typeof notifyProps>
