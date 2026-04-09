window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["checkbox"] = {
  "id": "checkbox",
  "cat": "form",
  "name": "Checkbox",
  "desc": "Checkbox with label and v-model binding.",
  "descZh": "复选框，支持标签和 v-model 绑定。",
  "usage": "<tt-checkbox v-model=\"checked\" label=\"Option A\" />",
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
  "tag": "tt-checkbox",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-checkbox v-model=\"checked\" label=\"Option A\" />"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref(true)\n</script>\n\n<tt-checkbox v-model=\"value\" label=\"Receive weekly digest\" />"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-checkbox label=\"Receive weekly digest\" disabled />"
    }
  ]
}
