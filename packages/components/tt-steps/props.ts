import type { ExtractPropTypes, PropType } from 'vue'

export const stepsProps = {
  active: {
    type: Number,
    default: 0,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
}

export type TtStepsProps = ExtractPropTypes<typeof stepsProps>
