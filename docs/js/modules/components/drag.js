window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["drag"] = {
  "id": "drag",
  "cat": "display",
  "name": "Drag",
  "desc": "Drag-and-drop sortable list/grid with long-press, shake animation, and delete support.",
  "descZh": "拖拽排序组件，支持宫格/单列/图片/自定义模式，长按触发、抖动动画、删除功能。",
  "usage": "<tt-drag v-model=\"items\" :columns=\"3\" :gap=\"16\">\n  <template #default=\"{ item }\">\n    <view>{{ item.text }}</view>\n  </template>\n</tt-drag>",
  "props": [
    ["modelValue", "Array", "[]"],
    ["disabled", "boolean", "false"],
    ["shake", "boolean", "false"],
    ["mode", "'single'|'grid'|'image'|'custom'", "'grid'"],
    ["keyName", "string", "null"],
    ["columns", "number", "3"],
    ["singleItemHeight", "number", "120"],
    ["itemWidth", "number", "0"],
    ["itemHeight", "number", "0"],
    ["gap", "number", "20"],
    ["borderRadius", "number", "10"],
    ["scale", "number", "1.05"],
    ["opacity", "number", "0.8"],
    ["damping", "number", "40"],
    ["deletable", "boolean", "false"],
    ["showDragHandle", "boolean", "false"],
    ["dragHandlePosition", "'left'|'right'", "'right'"],
    ["longPressDuration", "number", "600"]
  ],
  "tag": "tt-drag",
  "examples": [
    {
      "title": "Grid Mode",
      "titleZh": "宫格模式",
      "desc": "3-column draggable grid",
      "descZh": "3 列拖拽宫格",
      "code": "<tt-drag v-model=\"items\" :columns=\"3\" :gap=\"16\">\n  <template #default=\"{ item }\">\n    <view class=\"cell\">{{ item.text }}</view>\n  </template>\n</tt-drag>"
    },
    {
      "title": "Single Column with Handle",
      "titleZh": "单列模式带拖拽手柄",
      "desc": "Sortable list with drag handle on the right",
      "descZh": "带右侧拖拽手柄的排序列表",
      "code": "<tt-drag\n  v-model=\"items\"\n  mode=\"single\"\n  :single-item-height=\"120\"\n  show-drag-handle\n  drag-handle-position=\"right\"\n>\n  <template #default=\"{ item }\">\n    <view>{{ item.text }}</view>\n  </template>\n</tt-drag>"
    },
    {
      "title": "Deletable Items",
      "titleZh": "可删除项",
      "desc": "Long press to shake, tap delete button to remove",
      "descZh": "长按触发抖动，点击删除按钮移除",
      "code": "<tt-drag\n  v-model=\"items\"\n  :columns=\"3\"\n  deletable\n  shake\n>\n  <template #default=\"{ item }\">\n    <view>{{ item.text }}</view>\n  </template>\n</tt-drag>"
    },
    {
      "title": "Image Mode",
      "titleZh": "图片模式",
      "desc": "Draggable image grid with preview on tap",
      "descZh": "可拖拽图片宫格，点击预览",
      "code": "<tt-drag\n  v-model=\"images\"\n  mode=\"image\"\n  key-name=\"url\"\n  :columns=\"3\"\n  :gap=\"12\"\n  :border-radius=\"12\"\n/>"
    }
  ]
}
