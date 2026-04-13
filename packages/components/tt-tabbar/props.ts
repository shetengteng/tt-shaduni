import type { ExtractPropTypes, PropType } from 'vue'

export interface TabbarItem {
  text: string
  icon?: string
  selectedIcon?: string
  name?: string
}

export const tabbarProps = {
  modelValue: {
    type: [Number, String],
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
  placeholder: {
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
  activeColor: {
    type: String,
    default: '',
  },
  inactiveColor: {
    type: String,
    default: '',
  },
}

export type TtTabbarProps = ExtractPropTypes<typeof tabbarProps>
