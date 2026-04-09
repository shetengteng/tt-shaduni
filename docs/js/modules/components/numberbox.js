window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["numberbox"] = {
  "id": "numberbox",
  "cat": "form",
  "name": "NumberBox",
  "desc": "Stepper with min/max/step controls.",
  "descZh": "步进器，支持最小值/最大值/步长控制。",
  "usage": "<tt-number-box v-model=\"count\" :min=\"0\" :max=\"99\" />",
  "props": [
    [
      "v-model",
      "number",
      "0"
    ],
    [
      "min",
      "number",
      "0"
    ],
    [
      "max",
      "number",
      "99999"
    ],
    [
      "step",
      "number",
      "1"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-number-box",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-number-box v-model=\"count\" :min=\"0\" :max=\"99\" />"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref(3)\n</script>\n\n<tt-number-box v-model=\"value\" :min=\"1\" :max=\"10\" />"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-number-box :min=\"1\" :max=\"10\" disabled />"
    }
  ]
}
