import type { ExtractPropTypes, PropType } from 'vue'

export type TypographyType = 'text' | 'title' | 'link'
export type TypographyLevel = 1 | 2 | 3 | 4 | 5

export const typographyProps = {
  type: { type: String as PropType<TypographyType>, default: 'text' },
  level: { type: Number as PropType<TypographyLevel>, default: 3 },
  ellipsis: { type: [Boolean, Number], default: false },
  bold: { type: Boolean, default: false },
  underline: { type: Boolean, default: false },
  delete: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  href: { type: String, default: '' },
} as const

export type TypographyProps = ExtractPropTypes<typeof typographyProps>
