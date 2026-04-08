import type { ExtractPropTypes, PropType } from 'vue'

export const actionSheetProps = {
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  actions: {
    type: Array as PropType<Array<{ name: string; disabled?: boolean; color?: string }>>,
    default: () => [],
  },
  cancelText: {
    type: String,
    default: 'Cancel',
  },
} as const

export type TtActionSheetProps = ExtractPropTypes<typeof actionSheetProps>
