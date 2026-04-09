import type { ExtractPropTypes, PropType } from 'vue'

export interface StepItem {
  title: string
  description?: string
  icon?: string
}

export const stepsProps = {
  active: {
    type: Number,
    default: 0,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  items: {
    type: Array as PropType<StepItem[]>,
    default: () => [],
  },
}

export type TtStepsProps = ExtractPropTypes<typeof stepsProps>
