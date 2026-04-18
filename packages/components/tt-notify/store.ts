import { reactive } from 'vue'
import type { NotifyType, NotifyPosition } from './props'

interface NotifyState {
  show: boolean
  message: string
  type: NotifyType
  duration: number
  position: NotifyPosition
  icon: string
  color: string
  background: string
  timer: ReturnType<typeof setTimeout> | null
}

export const notifyState = reactive<NotifyState>({
  show: false,
  message: '',
  type: 'info',
  duration: 2500,
  position: 'top',
  icon: '',
  color: '',
  background: '',
  timer: null,
})

function clearTimer() {
  if (notifyState.timer) {
    clearTimeout(notifyState.timer)
    notifyState.timer = null
  }
}

export interface NotifyOptions {
  message: string
  type?: NotifyType
  duration?: number
  position?: NotifyPosition
  icon?: string
  color?: string
  background?: string
}

export function openNotify(options: NotifyOptions | string, type?: NotifyType) {
  clearTimer()
  const opts: NotifyOptions = typeof options === 'string' ? { message: options } : options
  notifyState.message = opts.message || ''
  notifyState.type = opts.type ?? type ?? 'info'
  notifyState.duration = opts.duration ?? 2500
  notifyState.position = opts.position ?? 'top'
  notifyState.icon = opts.icon ?? ''
  notifyState.color = opts.color ?? ''
  notifyState.background = opts.background ?? ''
  notifyState.show = true

  if (notifyState.duration > 0) {
    notifyState.timer = setTimeout(() => {
      notifyState.show = false
      notifyState.timer = null
    }, notifyState.duration)
  }
}

export function closeNotify() {
  clearTimer()
  notifyState.show = false
}
