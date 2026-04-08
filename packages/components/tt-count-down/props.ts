import type { ExtractPropTypes, PropType } from 'vue'

export const countDownProps = {
  time: {
    type: Number,
    default: 0,
  },
  format: {
    type: String,
    default: 'HH:mm:ss',
  },
  autoStart: {
    type: Boolean,
    default: true,
  },
}

export type TtCountDownProps = ExtractPropTypes<typeof countDownProps>
