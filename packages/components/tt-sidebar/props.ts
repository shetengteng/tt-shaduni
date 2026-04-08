import type { ExtractPropTypes, PropType } from 'vue'

export interface SidebarItem { text: string; badge?: string | number; disabled?: boolean }

export const sidebarProps = {
  modelValue: { type: Number, default: 0 },
  items: { type: Array as PropType<SidebarItem[]>, default: () => [] },
  width: { type: String, default: '160rpx' },
}

export type SidebarProps = ExtractPropTypes<typeof sidebarProps>
