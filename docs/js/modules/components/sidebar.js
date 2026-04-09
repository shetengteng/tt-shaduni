window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["sidebar"] = {
  "id": "sidebar",
  "cat": "navigation",
  "name": "Sidebar",
  "desc": "Category navigation with active indicator and badge.",
  "descZh": "侧边栏分类导航，支持激活指示器和角标。",
  "usage": "<tt-sidebar v-model=\"active\" :items=\"items\" />",
  "props": [
    [
      "v-model",
      "number",
      "0"
    ],
    [
      "items",
      "SidebarItem[]",
      "[]"
    ]
  ],
  "tag": "tt-sidebar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-sidebar v-model=\"active\" :items=\"items\" />"
    },
    {
      "title": "Data-driven Configuration",
      "titleZh": "数据驱动配置",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst items = [\n  { title: 'Orders', badge: '12' },\n  { title: 'Coupons' },\n  { title: 'Reviews', badge: 'New' },\n]\n</script>\n\n<tt-sidebar v-model=\"activeIndex\" :items=\"items\" />"
    }
  ]
}
