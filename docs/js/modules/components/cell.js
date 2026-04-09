window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["cell"] = {
  "id": "cell",
  "cat": "navigation",
  "name": "Cell",
  "desc": "List cell with title, value, label, and link arrow.",
  "descZh": "单元格，支持标题、数值、标签和链接箭头。",
  "usage": "<tt-cell title=\"Setting\" value=\"Enabled\" is-link />",
  "props": [
    [
      "title",
      "string",
      "''"
    ],
    [
      "value",
      "string",
      "''"
    ],
    [
      "label",
      "string",
      "''"
    ],
    [
      "isLink",
      "boolean",
      "false"
    ],
    [
      "border",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-cell",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-cell title=\"Setting\" value=\"Enabled\" is-link />"
    }
  ]
}
