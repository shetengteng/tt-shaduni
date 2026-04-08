import type { ExtractPropTypes } from 'vue'

export const collapseItemProps = {
  title: { type: String, default: '' },
  name: { type: [String, Number], default: '' },
  disabled: { type: Boolean, default: false },
}

export type TtCollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
