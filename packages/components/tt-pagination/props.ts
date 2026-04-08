import type { ExtractPropTypes, PropType } from 'vue'

export type PaginationMode = 'simple' | 'number'

export const paginationProps = {
  modelValue: { type: Number, default: 1 },
  totalItems: { type: Number, default: 0 },
  itemsPerPage: { type: Number, default: 10 },
  mode: { type: String as PropType<PaginationMode>, default: 'number' },
  showPageSize: { type: Number, default: 5 },
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
