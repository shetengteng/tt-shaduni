import { ref, computed, type Ref } from 'vue'
import type { DragItem, DragMode } from '../types'

export interface DragLayoutState {
  areaWidth: Ref<number>
  itemWidthPx: Ref<number>
  itemHeightPx: Ref<number>
  cols: Ref<number>
}

export interface UseDragLayoutOptions {
  mode: Ref<DragMode>
  columns: Ref<number>
  itemWidth: Ref<number>
  itemHeight: Ref<number>
  singleItemHeight: Ref<number>
  gap: Ref<number>
  dragList: Ref<DragItem[]>
}

export function useDragLayout(options: UseDragLayoutOptions): DragLayoutState & {
  screenWidth: number
  rpx2px: (rpx: number) => number
  calculateSize: () => void
  recalculateLayout: () => void
  areaHeight: Ref<string>
  contentWidth: Ref<string>
  contentHeight: Ref<string>
  contentMargin: Ref<string>
} {
  const { mode, columns, itemWidth, itemHeight, singleItemHeight, gap, dragList } = options

  const screenWidth = uni.getSystemInfoSync().windowWidth
  const areaWidth = ref(0)
  const itemWidthPx = ref(0)
  const itemHeightPx = ref(0)
  const cols = ref(0)

  function rpx2px(rpx: number): number {
    return screenWidth * rpx / 750
  }

  function calculateSize() {
    if (mode.value === 'single') {
      cols.value = 1
      itemWidthPx.value = areaWidth.value
      itemHeightPx.value = itemHeight.value > 0 ? rpx2px(itemHeight.value) : rpx2px(singleItemHeight.value)
    } else {
      if (itemWidth.value > 0) {
        itemWidthPx.value = rpx2px(itemWidth.value)
        cols.value = Math.floor(areaWidth.value / itemWidthPx.value)
      } else {
        cols.value = columns.value
        itemWidthPx.value = areaWidth.value / cols.value
      }

      if (mode.value === 'image') {
        itemHeightPx.value = itemWidthPx.value
      } else if (itemHeight.value > 0) {
        itemHeightPx.value = rpx2px(itemHeight.value)
      } else {
        itemHeightPx.value = itemWidthPx.value * 1.2
      }
    }
  }

  function recalculateLayout() {
    calculateSize()
    dragList.value.forEach((item, index) => {
      item._absX = mode.value === 'single' ? 0 : index % cols.value
      item._absY = Math.floor(index / cols.value)
      item._x = item._absX * itemWidthPx.value
      item._y = item._absY * itemHeightPx.value
    })
  }

  const areaHeight = computed(() => {
    const total = dragList.value.length
    const rows = mode.value === 'single' ? total : Math.ceil(total / (cols.value || 1))
    return (rows * itemHeightPx.value).toFixed() + 'px'
  })

  const contentWidth = computed(() => {
    const gapPx = rpx2px(gap.value)
    return (itemWidthPx.value - gapPx) + 'px'
  })

  const contentHeight = computed(() => {
    const gapPx = rpx2px(gap.value)
    return (itemHeightPx.value - gapPx) + 'px'
  })

  const contentMargin = computed(() => {
    const gapPx = rpx2px(gap.value) / 2
    return `${gapPx}px`
  })

  return {
    screenWidth,
    areaWidth,
    itemWidthPx,
    itemHeightPx,
    cols,
    rpx2px,
    calculateSize,
    recalculateLayout,
    areaHeight,
    contentWidth,
    contentHeight,
    contentMargin,
  }
}
