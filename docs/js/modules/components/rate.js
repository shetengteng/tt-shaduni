window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["rate"] = {
  "id": "rate",
  "cat": "form",
  "name": "Rate",
  "desc": "Star rating with custom count and readonly mode.",
  "descZh": "星级评分，支持自定义数量和只读模式。",
  "usage": "<tt-rate v-model=\"score\" />\n<tt-rate :model-value=\"3\" readonly />",
  "props": [
    [
      "v-model",
      "number",
      "0"
    ],
    [
      "count",
      "number",
      "5"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ],
    [
      "readonly",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-rate",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-rate v-model=\"score\" />\n<tt-rate :model-value=\"3\" readonly />"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref(4)\n</script>\n\n<tt-rate v-model=\"value\" />"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-rate disabled />"
    }
  ]
}
