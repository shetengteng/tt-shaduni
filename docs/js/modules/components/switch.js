window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["switch"] = {
  "id": "switch",
  "cat": "form",
  "name": "Switch",
  "desc": "Toggle switch with active color and size variants.",
  "descZh": "开关切换，支持自定义激活颜色和尺寸。",
  "usage": "<tt-switch v-model=\"on\" />\n<tt-switch v-model=\"on\" active-color=\"#22c55e\" size=\"sm\" />",
  "props": [
    [
      "v-model",
      "boolean",
      "false"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ],
    [
      "activeColor",
      "string",
      "''"
    ],
    [
      "size",
      "'sm'|'md'",
      "'md'"
    ]
  ],
  "tag": "tt-switch",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-switch v-model=\"on\" />\n<tt-switch v-model=\"on\" active-color=\"#22c55e\" size=\"sm\" />"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref(true)\n</script>\n\n<tt-switch v-model=\"value\" active-color=\"#16a34a\" />"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-switch active-color=\"#16a34a\" disabled />"
    }
  ]
}
