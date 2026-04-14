import type { ExtractPropTypes, PropType } from 'vue'

export interface CalendarDay {
  date: Date
  dateStr: string
  day: number
  isToday: boolean
  isSelected: boolean
  disabled: boolean
  style?: Record<string, string>
  bottom?: string
}

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
  formatter: {
    type: Function as PropType<(day: CalendarDay) => void>,
    default: undefined,
  },
  showBottom: {
    type: Boolean,
    default: true,
  },
}

export type TtCalendarProps = ExtractPropTypes<typeof calendarProps>
