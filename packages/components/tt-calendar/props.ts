import type { ExtractPropTypes, PropType } from 'vue'

export const calendarProps = {
  modelValue: {
    type: String,
    default: '',
  },
  minDate: {
    type: String,
    default: '',
  },
  maxDate: {
    type: String,
    default: '',
  },
  firstDayOfWeek: {
    type: Number as PropType<0 | 1>,
    default: 0,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  locale: {
    type: String as PropType<'en' | 'zh'>,
    default: 'en',
  },
}

export type TtCalendarProps = ExtractPropTypes<typeof calendarProps>
