window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["tabs"] = {
  "id": "tabs",
  "cat": "navigation",
  "name": "Tabs",
  "desc": "Tab navigation with active indicator and disabled state.",
  "descZh": "选项卡导航，支持激活指示器和禁用状态。",
  "usage": "<tt-tabs v-model=\"active\" :items=\"items\" />",
  "props": [
    [
      "v-model",
      "string|number",
      "0"
    ],
    [
      "items",
      "Array<{label,value,disabled?}>",
      "[]"
    ]
  ],
  "tag": "tt-tabs",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-tabs v-model=\"active\" :items=\"items\" />"
    },
    {
      "title": "Data-driven Tabs",
      "titleZh": "数据驱动 Tabs",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst items = [\n  { label: 'Overview', value: 'overview' },\n  { label: 'Analytics', value: 'analytics' },\n  { label: 'Members', value: 'members', disabled: true },\n]\n</script>\n\n<tt-tabs v-model=\"activeTab\" :items=\"items\">\n  <view>Current: {{ activeTab }}</view>\n</tt-tabs>"
    },
    {
      "title": "Tabs + Card Content",
      "titleZh": "Tabs + 内容卡片",
      "desc": "",
      "descZh": "",
      "code": "<tt-tabs v-model=\"activeTab\" :items=\"items\" />\n<tt-card :title=\"activeTab\">\n  <view>Render the matching panel here.</view>\n</tt-card>"
    },
    {
      "title": "Data-driven Configuration",
      "titleZh": "数据驱动配置",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst items = [\n  { label: 'Overview', value: 'overview' },\n  { label: 'Analytics', value: 'analytics' },\n  { label: 'Members', value: 'members', disabled: true },\n]\n</script>\n\n<tt-tabs v-model=\"activeTab\" :items=\"items\" />"
    }
  ]
}
