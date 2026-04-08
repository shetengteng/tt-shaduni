import type { ExtractPropTypes } from 'vue'

export const dialogProps = {
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  showCancelButton: {
    type: Boolean,
    default: true,
  },
  confirmText: {
    type: String,
    default: 'Confirm',
  },
  cancelText: {
    type: String,
    default: 'Cancel',
  },
} as const

export type DialogProps = ExtractPropTypes<typeof dialogProps>
