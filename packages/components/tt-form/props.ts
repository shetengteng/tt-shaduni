import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export type TtFormVariant = 'default' | 'list' | 'inline'

export const formProps = {
  model: {
    type: Object,
    default: () => ({}),
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  labelWidth: {
    type: String,
    default: '160rpx',
  },
  /**
   * 表单视觉模式：
   * - default：常规上下/左右间距，每行独立 margin
   * - list：cell 风格列表，行间细分隔线（无外间距），常用于卡片内
   * - inline：紧凑模式（保留扩展位）
   */
  variant: {
    type: String as PropType<TtFormVariant>,
    default: 'default',
  },
  /**
   * variant=list 时，是否在最后一项也显示底边（默认 false：最后一行不显示）
   */
  borderedLast: {
    type: Boolean,
    default: false,
  },
}

export type TtFormProps = ExtractPropTypes<typeof formProps>

export interface TtFormContext {
  variant: TtFormVariant
  labelWidth: string
  borderedLast: boolean
}

export const TT_FORM_INJECT_KEY: InjectionKey<TtFormContext> = Symbol('TtFormContext')
