import type { ExtractPropTypes, PropType } from 'vue'

export const indexBarProps = {
  indexList: { type: Array as PropType<string[]>, default: () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') },
  activeIndex: { type: String, default: '' },
}

export type IndexBarProps = ExtractPropTypes<typeof indexBarProps>
