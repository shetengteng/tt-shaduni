import type { ExtractPropTypes } from 'vue'

export const scrollViewProps = {
  scrollX: { type: Boolean, default: false },
  scrollY: { type: Boolean, default: true },
  refresherEnabled: { type: Boolean, default: false },
  refresherTriggered: { type: Boolean, default: false },
  lowerThreshold: { type: Number, default: 50 },
} as const

export type ScrollViewProps = ExtractPropTypes<typeof scrollViewProps>
