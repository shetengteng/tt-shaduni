window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["space"] = {
  "id": "space",
  "cat": "layout",
  "name": "Space",
  "desc": "Spacing component for horizontal/vertical gaps.",
  "descZh": "间距组件，用于水平/垂直间距控制。",
  "usage": "<tt-space direction=\"horizontal\" :size=\"12\">\n  <tt-button>A</tt-button>\n  <tt-button>B</tt-button>\n</tt-space>",
  "props": [
    [
      "direction",
      "'horizontal'|'vertical'",
      "'horizontal'"
    ],
    [
      "size",
      "string|number",
      "8"
    ],
    [
      "wrap",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-space",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-space direction=\"horizontal\" :size=\"12\">\n  <tt-button>A</tt-button>\n  <tt-button>B</tt-button>\n</tt-space>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-space>\n  <tt-button>A</tt-button>\n  <tt-button variant=\"outline\">B</tt-button>\n</tt-space>"
    }
  ]
}
