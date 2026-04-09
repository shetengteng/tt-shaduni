window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["navbar"] = {
  "id": "navbar",
  "cat": "navigation",
  "name": "Navbar",
  "desc": "Navigation bar with left/right slots and back arrow.",
  "descZh": "导航栏，支持左右插槽和返回箭头。",
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
      "desc": "",
      "descZh": "",
      "code": "<tt-navbar title=\"Page\" left-arrow />"
    }
  ]
}
