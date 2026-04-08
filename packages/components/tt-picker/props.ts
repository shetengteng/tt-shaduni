import type { ExtractPropTypes, PropType } from 'vue'

export const pickerProps = {
  modelValue: { type: [String, Number, Array] as PropType<string | number | (string | number)[]>, default: '' },
  columns: { type: Array as PropType<Array<{ text: string; value: string | number; children?: any[] }>>, default: () => [] },
  title: { type: String, default: '' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' },
  show: { type: Boolean, default: false },
} as const

export type PickerProps = ExtractPropTypes<typeof pickerProps>
