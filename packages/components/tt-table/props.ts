import type { ExtractPropTypes, PropType } from 'vue'

export interface TableColumn { key: string; title: string; width?: string; align?: 'left' | 'center' | 'right' }

export const tableProps = {
  columns: { type: Array as PropType<TableColumn[]>, default: () => [] },
  data: { type: Array as PropType<Record<string, any>[]>, default: () => [] },
  bordered: { type: Boolean, default: true },
  striped: { type: Boolean, default: false },
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>
