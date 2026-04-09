window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["descriptions"] = {
  "id": "descriptions",
  "cat": "display",
  "name": "Descriptions",
  "desc": "Key-value pairs in grid layout with title and bordered mode.",
  "descZh": "描述列表，网格布局显示键值对，支持标题和边框。",
  "usage": "<tt-descriptions title=\"Info\" :items=\"items\" :column=\"2\" />",
  "props": [
    [
      "title",
      "string",
      "''"
    ],
    [
      "items",
      "DescriptionItem[]",
      "[]"
    ],
    [
      "column",
      "number",
      "2"
    ],
    [
      "bordered",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-descriptions",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-descriptions title=\"Info\" :items=\"items\" :column=\"2\" />"
    },
    {
      "title": "Structured Metadata",
      "titleZh": "结构化信息展示",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst items = [\n  { label: 'Order ID', value: '#A-2048' },\n  { label: 'Status', value: 'Packed' },\n  { label: 'Warehouse', value: 'Shanghai' },\n  { label: 'ETA', value: 'Today 18:00' },\n]\n</script>\n\n<tt-descriptions title=\"Deployment\" :items=\"items\" :column=\"2\" bordered />"
    }
  ]
}
