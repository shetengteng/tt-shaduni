import type { ExtractPropTypes } from 'vue'

export const colProps = {
  span: { type: Number, default: 24 },
  offset: { type: Number, default: 0 },
} as const

export type ColProps = ExtractPropTypes<typeof colProps>
