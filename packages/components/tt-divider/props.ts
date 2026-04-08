import type { ExtractPropTypes, PropType } from 'vue'

export const dividerProps = {
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  contentPosition: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center',
  },
}

export type TtDividerProps = ExtractPropTypes<typeof dividerProps>
