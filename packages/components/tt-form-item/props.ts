import type { ExtractPropTypes, PropType } from 'vue'

export type TtFormItemDirection = 'horizontal' | 'vertical'

export const formItemProps = {
  label: {
    type: String,
    default: '',
  },
  prop: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * 排列方向：
   * - horizontal：label 在左，content 在右（默认）
   * - vertical：label 在上，content 在下
   */
  direction: {
    type: String as PropType<TtFormItemDirection>,
    default: 'horizontal',
  },
  /**
   * 是否隐藏 label（content 全宽，常用于 textarea / 整段说明文字）
   */
  hideLabel: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否显示右侧箭头（cell 风格，常配合可点击行）
   */
  arrow: {
    type: Boolean,
    default: false,
  },
  /**
   * 整行是否可点击：true 时整行点击会 emit click，并加上轻微 active 反馈
   */
  clickable: {
    type: Boolean,
    default: false,
  },
  /**
   * 在 list 模式下，本行是否显示底部分隔线（默认 true）
   */
  border: {
    type: Boolean,
    default: true,
  },
  /**
   * 自定义 label 容器宽度，覆盖父 form 的 labelWidth
   */
  labelWidth: {
    type: String,
    default: '',
  },
  labelStyle: {
    type: [String, Object] as PropType<string | Record<string, any>>,
    default: '',
  },
  contentStyle: {
    type: [String, Object] as PropType<string | Record<string, any>>,
    default: '',
  },
}

export type TtFormItemProps = ExtractPropTypes<typeof formItemProps>
