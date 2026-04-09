window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["table"] = {
  "id": "table",
  "cat": "display",
  "name": "Table",
  "desc": "Simple table with bordered/striped modes and horizontal scroll.",
  "descZh": "简单表格，支持边框/斑马纹和水平滚动。",
  "usage": "<tt-table :columns=\"cols\" :data=\"rows\" bordered striped />",
  "props": [
    [
      "columns",
      "TableColumn[]",
      "[]"
    ],
    [
      "data",
      "Record[]",
      "[]"
    ],
    [
      "bordered",
      "boolean",
      "true"
    ],
    [
      "striped",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-table",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-table :columns=\"cols\" :data=\"rows\" bordered striped />"
    },
    {
      "title": "Bordered Dashboard Table",
      "titleZh": "带边框的看板表格",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst columns = [\n  { label: 'Name', prop: 'name' },\n  { label: 'Owner', prop: 'owner' },\n  { label: 'Status', prop: 'status' },\n]\n\nconst rows = [\n  { name: 'Mobile revamp', owner: 'Ava', status: 'Active' },\n  { name: 'Release checklist', owner: 'Leo', status: 'Ready' },\n]\n</script>\n\n<tt-table :columns=\"columns\" :data=\"rows\" bordered striped />"
    },
    {
      "title": "Inside Card",
      "titleZh": "卡片内嵌表格",
      "desc": "",
      "descZh": "",
      "code": "<tt-card title=\"Latest Tasks\">\n  <tt-table :columns=\"columns\" :data=\"rows\" />\n</tt-card>"
    },
    {
      "title": "Multi-column Data",
      "titleZh": "多列数据配置",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst columns = [\n  ['Design', 'Engineering', 'Marketing'],\n  ['L1', 'L2', 'L3'],\n]\n</script>\n\n<tt-table :columns=\"columns\" />"
    }
  ]
}
