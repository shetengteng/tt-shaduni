import type { ExtractPropTypes, PropType } from 'vue'

export const avatarProps = {
  src: {
    type: String,
    default: '',
  },
  size: {
    type: [String, Number],
    default: 40,
  },
  shape: {
    type: String as PropType<'circle' | 'square'>,
    default: 'circle',
  },
  text: {
    type: String,
    default: '',
  },
} as const

export type TtAvatarProps = ExtractPropTypes<typeof avatarProps>
