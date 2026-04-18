import { openNotify, closeNotify, type NotifyOptions } from './store'
import type { NotifyType } from './props'

export interface NotifyFn {
  (options: NotifyOptions | string): void
  info: (options: NotifyOptions | string) => void
  success: (options: NotifyOptions | string) => void
  warning: (options: NotifyOptions | string) => void
  error: (options: NotifyOptions | string) => void
  primary: (options: NotifyOptions | string) => void
  hide: () => void
  close: () => void
}

function call(type: NotifyType, options: NotifyOptions | string) {
  if (typeof options === 'string') {
    openNotify({ message: options, type })
  } else {
    openNotify({ ...options, type: options.type ?? type })
  }
}

const notifyFn = ((options: NotifyOptions | string) => {
  call('info', options)
}) as NotifyFn

notifyFn.info = (options) => call('info', options)
notifyFn.success = (options) => call('success', options)
notifyFn.warning = (options) => call('warning', options)
notifyFn.error = (options) => call('error', options)
notifyFn.primary = (options) => call('primary', options)
notifyFn.hide = () => closeNotify()
notifyFn.close = () => closeNotify()

export const notify = notifyFn
export { closeNotify }
