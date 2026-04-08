import type { ExtractPropTypes, PropType } from 'vue'

export const loadingProps = {
  size: {
    type: [String, Number],
    default: 24,
  },
  color: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  vertical: {
    type: Boolean,
    default: false,
  },
} as const

export type TtLoadingProps = ExtractPropTypes<typeof loadingProps>
