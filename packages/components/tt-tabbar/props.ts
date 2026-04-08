import type { ExtractPropTypes, PropType } from 'vue'

export interface TabbarItem { text: string; icon?: string }

export const tabbarProps = {
  modelValue: {
    type: Number,
    default: 0,
  },
  items: {
    type: Array as PropType<TabbarItem[]>,
    default: () => [],
  },
  fixed: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true,
  },
}

export type TtTabbarProps = ExtractPropTypes<typeof tabbarProps>
