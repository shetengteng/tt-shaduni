import type { ExtractPropTypes, PropType } from 'vue'

export interface BreadcrumbItem { text: string; to?: string }

export const breadcrumbProps = {
  items: { type: Array as PropType<BreadcrumbItem[]>, default: () => [] },
  separator: { type: String, default: '/' },
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
