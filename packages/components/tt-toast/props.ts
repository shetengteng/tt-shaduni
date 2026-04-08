import type { ExtractPropTypes, PropType } from 'vue'

export const toastProps = {
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'text' | 'success' | 'fail' | 'loading'>,
    default: 'text',
  },
  duration: {
    type: Number,
    default: 2000,
  },
  show: {
    type: Boolean,
    default: false,
  },
}

export type TtToastProps = ExtractPropTypes<typeof toastProps>
