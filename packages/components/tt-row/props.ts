import type { ExtractPropTypes, PropType } from 'vue'

export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export type RowAlign = 'top' | 'middle' | 'bottom'

export const rowProps = {
  gutter: { type: Number, default: 0 },
  justify: { type: String as PropType<RowJustify>, default: 'start' },
  align: { type: String as PropType<RowAlign>, default: 'top' },
  wrap: { type: Boolean, default: true },
} as const

export type RowProps = ExtractPropTypes<typeof rowProps>
