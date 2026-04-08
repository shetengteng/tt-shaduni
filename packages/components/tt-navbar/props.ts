import type { ExtractPropTypes } from 'vue'

export const navbarProps = {
  title: {
    type: String,
    default: '',
  },
  leftText: {
    type: String,
    default: '',
  },
  leftArrow: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
  },
} as const

export type NavbarProps = ExtractPropTypes<typeof navbarProps>
