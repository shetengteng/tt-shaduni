import type { ExtractPropTypes, PropType } from 'vue'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'
export type TooltipTrigger = 'click' | 'manual'
export type TooltipAlign = 'start' | 'center' | 'end'

export const tooltipProps = {
  content: { type: String, default: '' },
  placement: { type: String as PropType<TooltipPlacement>, default: 'top' },
  show: { type: Boolean, default: false },
  trigger: { type: String as PropType<TooltipTrigger>, default: 'click' },
  closeOnClickOutside: { type: Boolean, default: true },
  arrow: { type: Boolean, default: true },
  variant: { type: String as PropType<'dark' | 'light'>, default: 'dark' },
  offset: { type: Number, default: 12 },
  /**
   * Cross-axis alignment relative to the trigger:
   * - placement=top|bottom → start: align popup left to trigger left; end: align right to right; center: center
   * - placement=left|right → start: align popup top to trigger top; end: align bottom to bottom; center: center
   */
  align: { type: String as PropType<TooltipAlign>, default: 'center' },
  /**
   * Safe distance (in px / rpx as configured by `boundaryUnit`) from the viewport edge.
   * When the popup would overflow the viewport it is clamped within `boundary` of the edge.
   */
  boundary: { type: Number, default: 8 },
  /**
   * Disable automatic placement flip when overflow is detected.
   * Default: tooltip flips to the opposite side if it would overflow.
   */
  disableFlip: { type: Boolean, default: false },
}

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
