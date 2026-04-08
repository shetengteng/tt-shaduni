import type { ExtractPropTypes, PropType } from 'vue'

export interface DropdownOption { text: string; value: string | number }

export const dropdownMenuProps = {
  options: { type: Array as PropType<DropdownOption[]>, default: () => [] },
  modelValue: { type: [String, Number], default: '' },
  title: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
} as const

export type DropdownMenuProps = ExtractPropTypes<typeof dropdownMenuProps>
