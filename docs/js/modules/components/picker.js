window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["picker"] = {
  "id": "picker",
  "cat": "form",
  "name": "Picker",
  "desc": "Single/multi-column picker with confirm/cancel toolbar.",
  "descZh": "单列/多列选择器，带确认/取消工具栏。",
  "usage": "<tt-picker v-model:show=\"visible\" :columns=\"cols\" @confirm=\"onConfirm\" />",
  "props": [
    [
      "v-model:show",
      "boolean",
      "false"
    ],
    [
      "columns",
      "Array",
      "[]"
    ],
    [
      "title",
      "string",
      "''"
    ],
    [
      "confirmText",
      "string",
      "'Confirm'"
    ],
    [
      "cancelText",
      "string",
      "'Cancel'"
    ]
  ],
  "tag": "tt-picker",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-picker v-model:show=\"visible\" :columns=\"cols\" @confirm=\"onConfirm\" />"
    },
    {
      "title": "Two-column Picker",
      "titleZh": "双列选择器",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst columns = [\n  ['Design', 'Engineering', 'Marketing'],\n  ['L1', 'L2', 'L3'],\n]\n</script>\n\n<tt-picker\n  v-model:show=\"visible\"\n  :columns=\"columns\"\n  title=\"Select team\"\n  @confirm=\"onConfirm\"\n/>"
    },
    {
      "title": "Button Trigger",
      "titleZh": "按钮触发",
      "desc": "",
      "descZh": "",
      "code": "<tt-button @click=\"visible = true\">Choose options</tt-button>\n<tt-picker v-model:show=\"visible\" :columns=\"columns\" />"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst visible = ref(false)\n</script>\n\n<tt-button variant=\"outline\" @click=\"visible = true\">Open Picker</tt-button>\n<tt-picker v-model:show=\"visible\" />"
    }
  ]
}
