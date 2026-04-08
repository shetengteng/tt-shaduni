import type { ExtractPropTypes, PropType } from 'vue'

export const sheetProps = {
  show: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String as PropType<'bottom' | 'right'>,
    default: 'bottom',
  },
  title: {
    type: String,
    default: '',
  },
} as const

export type TtSheetProps = ExtractPropTypes<typeof sheetProps>
