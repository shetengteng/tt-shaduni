window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["divider"] = {
  "id": "divider",
  "cat": "display",
  "name": "Divider",
  "desc": "Horizontal or vertical divider with content slot.",
  "descZh": "水平或垂直分割线，支持内容插槽。",
  "usage": "<tt-divider />\n<tt-divider content-position=\"left\">Text</tt-divider>",
  "props": [
    [
      "direction",
      "'horizontal'|'vertical'",
      "'horizontal'"
    ],
    [
      "contentPosition",
      "'left'|'center'|'right'",
      "'center'"
    ]
  ],
  "tag": "tt-divider",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-divider />\n<tt-divider content-position=\"left\">Text</tt-divider>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-divider>\n  OR\n</tt-divider>"
    }
  ]
}
