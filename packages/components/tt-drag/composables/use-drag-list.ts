import { nextTick, getCurrentInstance, type Ref } from 'vue'
import type { DragItem, DragMode } from '../types'

export interface UseDragListOptions {
  mode: Ref<DragMode>
  disabled: Ref<boolean>
  showDragHandle: Ref<boolean>
  keyName: Ref<string | null>
  dragList: Ref<DragItem[]>
  cols: Ref<number>
  itemWidthPx: Ref<number>
  itemHeightPx: Ref<number>
  areaWidth: Ref<number>
  calculateSize: () => void
}

export function useDragList(options: UseDragListOptions) {
  const { mode, disabled, showDragHandle, keyName, dragList, cols, itemWidthPx, itemHeightPx, areaWidth, calculateSize } = options

  const dragListIndexMap = new Map<string, number>()
  let firstLoad = true
  let changeStatus = true

  const instance = getCurrentInstance()

  function isFirstLoad() { return firstLoad }
  function setFirstLoad(v: boolean) { firstLoad = v }
  function isChangeEnabled() { return changeStatus }
  function setChangeStatus(v: boolean) { changeStatus = v }

  function generateId(): string {
    return 'drag_' + Date.now() + '_' + Math.random().toString(36).slice(2, 11)
  }

  function getItemValue(item: any): any {
    if (keyName.value && typeof item === 'object') {
      return item[keyName.value]
    }
    if (typeof item === 'object' && item !== null && 'value' in item && !('id' in item)) {
      return item.value
    }
    return item
  }

  function updateItemPosition(item: DragItem) {
    nextTick(() => {
      item._x = item._absX * itemWidthPx.value
      item._y = item._absY * itemHeightPx.value
    })
  }

  function updateIndexMap() {
    dragListIndexMap.clear()
    dragList.value.forEach((item, index) => {
      dragListIndexMap.set(item._dragId, index)
    })
  }

  function addItemToList(data: any) {
    const index = dragList.value.length
    const absX = mode.value === 'single' ? 0 : index % cols.value
    const absY = Math.floor(index / cols.value)
    const x = absX * itemWidthPx.value
    const y = absY * itemHeightPx.value

    const baseData = typeof data === 'object' && data !== null ? { ...data } : { value: data }
    const itemDisabled = disabled.value || (baseData.draggable === false) || (showDragHandle.value && mode.value === 'single')
    const needLongPress = !disabled.value && baseData.draggable !== false && !(showDragHandle.value && mode.value === 'single')

    const dragId = generateId()
    const dragItem: DragItem = {
      ...baseData,
      _dragId: dragId,
      _x: x, _y: y,
      _oldX: x, _oldY: y,
      _absX: absX, _absY: absY,
      _scale: 1, _zIndex: index + 9, _opacity: 1,
      _index: index,
      _disabled: itemDisabled || needLongPress,
      _offset: 0, _moveEnd: false,
    }

    dragList.value.push(dragItem)
    dragListIndexMap.set(dragId, index)
  }

  function initDrag(modelValue: any[]) {
    const query = uni.createSelectorQuery().in(instance!.proxy)
    query.select('.tt-drag').boundingClientRect((data: any) => {
      if (!data) {
        console.error('TtDrag: 组件未正确渲染，将在下一帧重试')
        nextTick(() => { setTimeout(() => initDrag(modelValue), 50) })
        return
      }

      areaWidth.value = data.width
      calculateSize()
      modelValue.forEach(item => addItemToList(item))
      firstLoad = false
    }).exec()
  }

  function updateList(newList: any[], fromWatch = false) {
    if (fromWatch && newList.length === dragList.value.length) {
      const sortedDragList = dragList.value.slice().sort((a, b) => a._index - b._index)
      let isOrderSame = true
      for (let i = 0; i < newList.length; i++) {
        if (getItemValue(newList[i]) !== getItemValue(sortedDragList[i])) {
          isOrderSame = false
          break
        }
      }
      if (isOrderSame) {
        for (let i = 0; i < newList.length; i++) {
          const newData = newList[i]
          const oldItem = sortedDragList[i]
          const baseData = typeof newData === 'object' && newData !== null ? { ...newData } : { value: newData }
          Object.keys(baseData).forEach(key => {
            if (!key.startsWith('_')) (oldItem as any)[key] = (baseData as any)[key]
          })
        }
        return
      }
    }

    dragList.value = []
    dragListIndexMap.clear()
    newList.forEach(item => addItemToList(item))
  }

  function changeItemPosition(item: DragItem, offset: number) {
    item._index += offset
    item._offset = 0
    item._x = item._oldX
    item._y = item._oldY
    item._absX = mode.value === 'single' ? 0 : item._index % cols.value
    item._absY = Math.floor(item._index / cols.value)
    updateItemPosition(item)
  }

  function emitChange(emitFn: (event: string, ...args: any[]) => void) {
    const result: any[] = []
    const sortedList = dragList.value.slice().sort((a, b) => a._index - b._index)
    sortedList.forEach(item => {
      const cleanItem: Record<string, any> = {}
      Object.keys(item).forEach(key => {
        if (!key.startsWith('_')) cleanItem[key] = (item as any)[key]
      })
      result.push(cleanItem)
    })

    changeStatus = false
    emitFn('input', result)
    emitFn('update:modelValue', result)
    emitFn('change', result)

    nextTick(() => {
      setTimeout(() => { changeStatus = true }, 200)
    })
  }

  function deleteItemHandle(item: DragItem, index: number, emitFn: (event: string, ...args: any[]) => void) {
    dragList.value.splice(index, 1)
    dragListIndexMap.delete(item._dragId)
    emitFn('delete', index, item)

    dragList.value.forEach(obj => {
      if (obj._index > item._index) {
        obj._index -= 1
        obj._x = obj._oldX
        obj._y = obj._oldY
        obj._absX = mode.value === 'single' ? 0 : obj._index % cols.value
        obj._absY = Math.floor(obj._index / cols.value)
        updateItemPosition(obj)
      }
    })

    updateIndexMap()
    emitChange(emitFn)
  }

  return {
    isFirstLoad,
    setFirstLoad,
    isChangeEnabled,
    setChangeStatus,
    getItemValue,
    updateItemPosition,
    updateIndexMap,
    addItemToList,
    initDrag,
    updateList,
    changeItemPosition,
    emitChange,
    deleteItemHandle,
  }
}
