window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["pagination"] = {
  "id": "pagination",
  "cat": "navigation",
  "name": "Pagination",
  "desc": "Data pagination with number and simple modes.",
  "descZh": "分页器，支持数字和简洁模式。",
  "usage": "<tt-pagination v-model=\"page\" :total-items=\"100\" :items-per-page=\"10\" />",
  "props": [
    [
      "v-model",
      "number",
      "1"
    ],
    [
      "totalItems",
      "number",
      "0"
    ],
    [
      "itemsPerPage",
      "number",
      "10"
    ],
    [
      "mode",
      "'number'|'simple'",
      "'number'"
    ]
  ],
  "tag": "tt-pagination",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-pagination v-model=\"page\" :total-items=\"100\" :items-per-page=\"10\" />"
    }
  ]
}
