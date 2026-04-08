import type { ExtractPropTypes, PropType } from 'vue'

export const noticeBarProps = {
  text: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '',
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: Boolean,
    default: true,
  },
}

export type TtNoticeBarProps = ExtractPropTypes<typeof noticeBarProps>
