import type { ExtractPropTypes, PropType } from 'vue'

export type DatePickerMode = 'date' | 'time' | 'datetime'

export const datePickerProps = {
  modelValue: { type: String, default: '' },
  mode: { type: String as PropType<DatePickerMode>, default: 'date' },
  title: { type: String, default: '' },
  show: { type: Boolean, default: false },
  minDate: { type: String, default: '' },
  maxDate: { type: String, default: '' },
} as const

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>
