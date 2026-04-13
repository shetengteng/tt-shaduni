window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["navbar"] = {
  "id": "navbar",
  "cat": "navigation",
  "name": "Navbar",
  "desc": "Navigation bar with left/right slots and back arrow. The back arrow uses tt-icon (ri-arrow-left-s-line).",
  "descZh": "导航栏，支持左右插槽和返回箭头。返回箭头使用 tt-icon（ri-arrow-left-s-line）。",
  "usage": "<tt-navbar title=\"Page\" left-arrow />",
  "props": [
    [
      "title",
      "string",
      "''"
    ],
    [
      "leftText",
      "string",
      "''"
    ],
    [
      "leftArrow",
      "boolean",
      "false"
    ],
    [
      "fixed",
      "boolean",
      "false"
    ],
    [
      "border",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-navbar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "Basic navbar with back arrow icon.",
      "descZh": "带返回箭头图标的基础导航栏。",
      "code": "<tt-navbar title=\"Page\" left-arrow />"
    },
    {
      "title": "With Left Text",
      "titleZh": "带左侧文本",
      "desc": "Show text next to the back arrow.",
      "descZh": "在返回箭头旁显示文本。",
      "code": "<tt-navbar title=\"Detail\" left-arrow left-text=\"Back\" />"
    },
    {
      "title": "Custom Right Slot",
      "titleZh": "自定义右侧插槽",
      "desc": "Use the right slot to add action icons.",
      "descZh": "使用右侧插槽添加操作图标。",
      "code": "<tt-navbar title=\"Page\" left-arrow>\n  <template #right>\n    <tt-icon name=\"ri-more-line\" :size=\"40\" />\n  </template>\n</tt-navbar>"
    }
  ]
}
