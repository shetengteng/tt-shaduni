window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["radio"] = {
  "id": "radio",
  "cat": "form",
  "name": "Radio",
  "desc": "Radio button with label.",
  "descZh": "单选按钮，支持标签和互斥选择。",
  "usage": "<tt-radio v-model=\"selected\" label=\"Choice A\" />",
  "props": [
    [
      "v-model",
      "boolean",
      "false"
    ],
    [
      "label",
      "string",
      "''"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-radio",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-radio v-model=\"selected\" label=\"Choice A\" />"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref(false)\n</script>\n\n<tt-radio v-model=\"value\" label=\"Express shipping\" />"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-radio label=\"Express shipping\" disabled />"
    }
  ]
}
