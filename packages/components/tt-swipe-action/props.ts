import type { ExtractPropTypes, PropType } from 'vue'

export interface SwipeActionButton { text: string; color?: string; bgColor?: string }

export const swipeActionProps = {
  leftActions: { type: Array as PropType<SwipeActionButton[]>, default: () => [] },
  rightActions: { type: Array as PropType<SwipeActionButton[]>, default: () => [{ text: 'Delete', bgColor: '#ef4444' }] },
  disabled: { type: Boolean, default: false },
  autoClose: { type: Boolean, default: true },
}

export type SwipeActionProps = ExtractPropTypes<typeof swipeActionProps>
