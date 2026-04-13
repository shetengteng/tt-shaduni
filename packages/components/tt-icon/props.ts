import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  name: {
    type: String,
    default: '',
  },
  svg: {
    type: String,
    default: '',
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 48,
  },
  color: {
    type: String,
    default: '',
  },
}

export type IconProps = ExtractPropTypes<typeof iconProps>
