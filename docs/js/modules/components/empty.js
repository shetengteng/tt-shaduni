window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["empty"] = {
  "id": "empty",
  "cat": "display",
  "name": "Empty",
  "desc": "Empty state with description and action slot.",
  "descZh": "空状态占位，支持描述文字和操作插槽。",
  "usage": "<tt-empty description=\"No data\" />",
  "props": [
    [
      "description",
      "string",
      "'No data'"
    ],
    [
      "image",
      "string",
      "''"
    ]
  ],
  "tag": "tt-empty",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-empty description=\"No data\" />"
    },
    {
      "title": "Actionable Empty State",
      "titleZh": "可操作空状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-empty description=\"No deployment records yet\">\n  <template #default>\n    <tt-button size=\"sm\">Create first record</tt-button>\n  </template>\n</tt-empty>"
    }
  ]
}
