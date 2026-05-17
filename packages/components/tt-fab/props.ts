import type { ExtractPropTypes, PropType } from 'vue'

export type TtFabType =
  | 'primary'
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'

export type TtFabShape = 'circle' | 'square'
export type TtFabSize = 'mini' | 'regular' | 'large'
export type TtFabPosition =
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'top-right'
  | 'custom'
export type TtFabDirection = 'up' | 'down' | 'left' | 'right'

export interface TtFabItem {
  key: string | number
  icon?: string
  text?: string
  type?: TtFabType
  badge?: number | string
  disabled?: boolean
}

export const fabProps = {
  icon: {
    type: String,
    default: 'ri-add-line',
  },
  iconSize: {
    type: [String, Number] as PropType<string | number>,
    default: 48,
  },
  iconColor: {
    type: String,
    default: 'var(--tt-primary-foreground, #fafafa)',
  },
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<TtFabType>,
    default: 'primary',
  },
  shape: {
    type: String as PropType<TtFabShape>,
    default: 'square',
  },
  radius: {
    type: String,
    default: '32rpx',
  },
  size: {
    type: String as PropType<TtFabSize>,
    default: 'regular',
  },
  position: {
    type: String as PropType<TtFabPosition>,
    default: 'bottom-right',
  },
  offsetBottom: {
    type: String,
    default: 'calc(144rpx + env(safe-area-inset-bottom))',
  },
  offsetRight: {
    type: String,
    default: '40rpx',
  },
  offsetLeft: {
    type: String,
    default: '',
  },
  offsetTop: {
    type: String,
    default: '',
  },
  zIndex: {
    type: Number,
    default: 100,
  },
  shadow: {
    type: Boolean,
    default: true,
  },
  shadowColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.18)',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array as PropType<TtFabItem[]>,
    default: () => [],
  },
  direction: {
    type: String as PropType<TtFabDirection>,
    default: 'up',
  },
  gap: {
    type: Number,
    default: 24,
  },
  autoClose: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
}

export type TtFabProps = ExtractPropTypes<typeof fabProps>
