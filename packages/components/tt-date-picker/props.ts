import type { ExtractPropTypes, PropType } from 'vue'

export type DatePickerMode = 'date' | 'time' | 'datetime'

export const datePickerProps = {
  modelValue: { type: String, default: '' },
  mode: { type: String as PropType<DatePickerMode>, default: 'date' },
  title: { type: String, default: '' },
  show: { type: Boolean, default: false },
  minDate: { type: String, default: '' },
  maxDate: { type: String, default: '' },
  locale: { type: String as PropType<'en' | 'zh'>, default: 'en' },
  minYear: { type: Number, default: 2000 },
  maxYear: { type: Number, default: 2040 },
}

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>
