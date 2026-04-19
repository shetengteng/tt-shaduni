import type { ExtractPropTypes, PropType } from 'vue'

export type TtColorPickerSize = 'sm' | 'md' | 'lg'
export type TtColorPickerShape = 'circle' | 'square'

/** 色项可以是字符串，也可以是带名称的对象 */
export type TtColorItem = string | { value: string; label?: string }

export interface TtColorPickerGroup {
  label: string
  colors: TtColorItem[]
}

export const colorPickerProps = {
  modelValue: {
    type: String,
    default: '',
  },
  /** 简单模式：扁平色板。默认 12 色精选 */
  colors: {
    type: Array as PropType<TtColorItem[]>,
    default: () => [],
  },
  /** 高级模式：分组色板（覆盖 colors） */
  groups: {
    type: Array as PropType<TtColorPickerGroup[]>,
    default: () => [],
  },
  /** 推荐色，置顶显示在 popup 顶部，独立于 colors / groups */
  recommended: {
    type: Array as PropType<TtColorItem[]>,
    default: () => [],
  },
  /** 推荐色组的标题（默认: 推荐 / Recommended） */
  recommendedLabel: {
    type: String,
    default: '',
  },
  /** 行内预览色块个数 */
  previewCount: {
    type: Number,
    default: 5,
  },
  /** 色块尺寸 */
  size: {
    type: String as PropType<TtColorPickerSize>,
    default: 'md',
  },
  /** 色块形状 */
  shape: {
    type: String as PropType<TtColorPickerShape>,
    default: 'circle',
  },
  /** popup 内是否显示色名 */
  showLabel: {
    type: Boolean,
    default: false,
  },
  /** popup 标题 */
  popupTitle: {
    type: String,
    default: '选择颜色',
  },
  /** popup 确定按钮文案 */
  confirmText: {
    type: String,
    default: '确定',
  },
  /** popup 取消按钮文案 */
  cancelText: {
    type: String,
    default: '取消',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type TtColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
