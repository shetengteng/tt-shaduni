window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["breadcrumb"] = {
  "id": "breadcrumb",
  "cat": "navigation",
  "name": "Breadcrumb",
  "desc": "Hierarchy navigation breadcrumb trail.",
  "descZh": "面包屑导航，显示层级路径。",
  "usage": "<tt-breadcrumb :items=\"[{text:'Home',to:'/'},{text:'Page'}]\" />",
  "props": [
    [
      "items",
      "BreadcrumbItem[]",
      "[]"
    ],
    [
      "separator",
      "string",
      "'/'"
    ]
  ],
  "tag": "tt-breadcrumb",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-breadcrumb :items=\"[{text:'Home',to:'/'},{text:'Page'}]\" />"
    },
    {
      "title": "Hierarchy Data",
      "titleZh": "层级数据配置",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst items = [\n  { text: 'Workspace', to: '/' },\n  { text: 'Projects', to: '/projects' },\n  { text: 'Mobile Upgrade' },\n]\n</script>\n\n<tt-breadcrumb :items=\"items\" separator=\"›\" />"
    }
  ]
}
