import type { ExtractPropTypes, PropType } from 'vue'

export const tagProps = {
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
    default: 'default',
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'sm' | 'md'>,
    default: 'md',
  },
} as const

export type TtTagProps = ExtractPropTypes<typeof tagProps>
