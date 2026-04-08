import type { ExtractPropTypes, PropType } from 'vue'

export const formProps = {
  model: {
    type: Object,
    default: () => ({}),
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  labelWidth: {
    type: String,
    default: '80px',
  },
} as const

export type TtFormProps = ExtractPropTypes<typeof formProps>
