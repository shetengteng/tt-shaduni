window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["grid"] = {
  "id": "grid",
  "cat": "layout",
  "name": "Grid",
  "desc": "Grid layout with configurable columns and optional border.",
  "descZh": "宫格布局，可配置列数和可选边框。",
  "usage": "<tt-grid :column-num=\"4\" border>\n  <view>Item 1</view>\n</tt-grid>",
  "props": [
    [
      "columnNum",
      "number",
      "4"
    ],
    [
      "border",
      "boolean",
      "true"
    ],
    [
      "square",
      "boolean",
      "false"
    ],
    [
      "gutter",
      "number",
      "0"
    ]
  ],
  "tag": "tt-grid",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-grid :column-num=\"4\" border>\n  <view>Item 1</view>\n</tt-grid>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-grid>\n  <view>Dashboard</view>\n</tt-grid>"
    }
  ]
}
