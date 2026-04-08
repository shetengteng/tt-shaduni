import type { ExtractPropTypes, PropType } from 'vue'

export type CardShadow = 'always' | 'hover' | 'never'

export const cardProps = {
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  shadow: {
    type: String as PropType<CardShadow>,
    default: 'always',
  },
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
