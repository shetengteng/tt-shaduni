import type { ExtractPropTypes, PropType } from 'vue'

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

export const buttonProps = {
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'default',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  openType: {
    type: String,
    default: '',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
