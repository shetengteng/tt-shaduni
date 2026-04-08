import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  name: {
    type: String,
    required: true as const,
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 16,
  },
  color: {
    type: String,
    default: '',
  },
}

export type IconProps = ExtractPropTypes<typeof iconProps>
