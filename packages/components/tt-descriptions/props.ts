import type { ExtractPropTypes, PropType } from 'vue'

export interface DescriptionItem { label: string; value: string; span?: number }

export const descriptionsProps = {
  title: { type: String, default: '' },
  items: { type: Array as PropType<DescriptionItem[]>, default: () => [] },
  column: { type: Number, default: 2 },
  bordered: { type: Boolean, default: false },
}

export type DescriptionsProps = ExtractPropTypes<typeof descriptionsProps>
