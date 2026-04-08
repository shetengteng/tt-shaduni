import type { ExtractPropTypes } from 'vue'

export const listProps = {
  loading: { type: Boolean, default: false },
  finished: { type: Boolean, default: false },
  loadingText: { type: String, default: 'Loading...' },
  finishedText: { type: String, default: 'No more data' },
  offset: { type: Number, default: 300 },
} as const

export type ListProps = ExtractPropTypes<typeof listProps>
