window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["collapse"] = {
  "id": "collapse",
  "cat": "layout",
  "name": "Collapse",
  "desc": "Accordion panels with expand/collapse.",
  "descZh": "手风琴折叠面板，支持展开/收起。",
  "usage": "<tt-collapse v-model=\"active\" accordion>\n  <tt-collapse-item>Content</tt-collapse-item>\n</tt-collapse>",
  "props": [
    [
      "v-model",
      "Array",
      "[]"
    ],
    [
      "accordion",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-collapse",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-collapse v-model=\"active\" accordion>\n  <tt-collapse-item>Content</tt-collapse-item>\n</tt-collapse>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('demo')\n</script>\n\n<tt-collapse v-model=\"value\">\n  <tt-collapse-item name=\"a\" title=\"Billing\">Monthly billing details</tt-collapse-item>\n</tt-collapse>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-collapse>\n  <tt-collapse-item name=\"a\" title=\"Billing\">Monthly billing details</tt-collapse-item>\n</tt-collapse>"
    }
  ]
}
