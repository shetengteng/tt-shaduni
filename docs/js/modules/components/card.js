window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["card"] = {
  "id": "card",
  "cat": "display",
  "name": "Card",
  "desc": "Container with header, content, footer slots and shadow variants.",
  "descZh": "卡片容器，支持头部、内容、底部插槽和阴影变体。",
  "usage": "<tt-card title=\"Title\" description=\"Desc\">\n  <text>Content</text>\n</tt-card>",
  "props": [
    [
      "title",
      "string",
      "''"
    ],
    [
      "description",
      "string",
      "''"
    ],
    [
      "shadow",
      "'always'|'hover'|'never'",
      "'always'"
    ]
  ],
  "tag": "tt-card",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-card title=\"Title\" description=\"Desc\">\n  <text>Content</text>\n</tt-card>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-card>\n  <view>Project summary and actions.</view>\n</tt-card>"
    }
  ]
}
