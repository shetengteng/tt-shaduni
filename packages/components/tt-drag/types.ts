import type { ExtractPropTypes } from 'vue'
import { dragProps } from './props'

export type DragProps = ExtractPropTypes<typeof dragProps>

export type DragMode = 'single' | 'grid' | 'image' | 'custom'

export interface DragHandleStyleConfig {
  width?: number
  height?: number
  backgroundColor?: string
  borderRadius?: number
  boxShadow?: string
  offset?: number
  icon?: string
  iconSize?: number
  iconColor?: string
}

export interface DragItem {
  [key: string]: any
  _dragId: string
  _x: number
  _y: number
  _oldX: number
  _oldY: number
  _absX: number
  _absY: number
  _scale: number
  _zIndex: number
  _opacity: number
  _index: number
  _disabled: boolean
  _offset: number
  _moveEnd: boolean
}
