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
}

export type TtFormProps = ExtractPropTypes<typeof formProps>
