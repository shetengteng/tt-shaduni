window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["tooltip"] = {
  "id": "tooltip",
  "cat": "display",
  "name": "Tooltip",
  "desc": "Tooltip popup with 4 placement directions.",
  "descZh": "工具提示弹出框，支持 4 个方向定位。",
  "usage": "<tt-tooltip content=\"Tip text\" placement=\"top\">\n  <tt-button>Hover me</tt-button>\n</tt-tooltip>",
  "props": [
    [
      "content",
      "string",
      "''"
    ],
    [
      "placement",
      "'top'|'bottom'|'left'|'right'",
      "'top'"
    ],
    [
      "show",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-tooltip",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-tooltip content=\"Tip text\" placement=\"top\">\n  <tt-button>Hover me</tt-button>\n</tt-tooltip>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-tooltip content=\"This action runs immediately\">\n  <tt-button variant=\"outline\">Hover me</tt-button>\n</tt-tooltip>"
    }
  ]
}
