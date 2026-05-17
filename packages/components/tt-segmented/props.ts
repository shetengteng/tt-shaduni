import type { ExtractPropTypes, PropType } from 'vue'

export type TtSegmentedSize = 'sm' | 'md' | 'lg'

export interface TtSegmentedOption {
  label: string
  value: string | number
  disabled?: boolean
}

export const segmentedProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  options: {
    type: Array as PropType<TtSegmentedOption[]>,
    default: () => [],
  },
  size: {
    type: String as PropType<TtSegmentedSize>,
    default: 'md',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: true,
  },
}

export type TtSegmentedProps = ExtractPropTypes<typeof segmentedProps>
