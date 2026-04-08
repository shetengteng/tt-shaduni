import type { ExtractPropTypes } from 'vue'

export const gridProps = {
  columnNum: { type: Number, default: 4 },
  border: { type: Boolean, default: true },
  square: { type: Boolean, default: false },
  gutter: { type: Number, default: 0 },
}

export type GridProps = ExtractPropTypes<typeof gridProps>
