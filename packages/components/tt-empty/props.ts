import type { ExtractPropTypes, PropType } from 'vue'

export const emptyProps = {
  description: {
    type: String,
    default: 'No data',
  },
  image: {
    type: String,
    default: '',
  },
}

export type TtEmptyProps = ExtractPropTypes<typeof emptyProps>
