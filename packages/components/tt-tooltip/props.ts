import type { ExtractPropTypes, PropType } from 'vue'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export const tooltipProps = {
  content: { type: String, default: '' },
  placement: { type: String as PropType<TooltipPlacement>, default: 'top' },
  show: { type: Boolean, default: false },
}

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
