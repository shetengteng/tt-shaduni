import type { ExtractPropTypes } from 'vue'

export const stickyProps = {
  offsetTop: { type: Number, default: 0 },
  zIndex: { type: Number, default: 99 },
  disabled: { type: Boolean, default: false },
} as const

export type StickyProps = ExtractPropTypes<typeof stickyProps>
