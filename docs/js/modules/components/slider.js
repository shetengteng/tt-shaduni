window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["slider"] = {
  "id": "slider",
  "cat": "form",
  "name": "Slider",
  "desc": "Single-thumb slider with min/max/step controls.",
  "descZh": "单滑块滑动条，支持最小值/最大值/步长。",
  "usage": "<tt-slider v-model=\"val\" :min=\"0\" :max=\"100\" />",
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
      "100"
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
  "tag": "tt-slider",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-slider v-model=\"val\" :min=\"0\" :max=\"100\" />"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref(32)\n</script>\n\n<tt-slider v-model=\"value\" :min=\"0\" :max=\"100\" />"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-slider :min=\"0\" :max=\"100\" disabled />"
    }
  ]
}
