window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["datepicker"] = {
  "id": "datepicker",
  "cat": "form",
  "name": "DatePicker",
  "desc": "Date picker with year-month-day columns.",
  "descZh": "日期选择器，支持年-月-日列选择。",
  "usage": "<tt-date-picker v-model=\"date\" v-model:show=\"visible\" title=\"Select Date\" />",
  "props": [
    [
      "v-model",
      "string",
      "''"
    ],
    [
      "v-model:show",
      "boolean",
      "false"
    ],
    [
      "mode",
      "'date'|'time'|'datetime'",
      "'date'"
    ],
    [
      "title",
      "string",
      "''"
    ]
  ],
  "tag": "tt-date-picker",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-date-picker v-model=\"date\" v-model:show=\"visible\" title=\"Select Date\" />"
    },
    {
      "title": "Controlled Date Sheet",
      "titleZh": "受控日期弹层",
      "desc": "",
      "descZh": "",
      "code": "<tt-button variant=\"outline\" @click=\"showDate = true\">\n  {{ selectedDate || 'Select Date' }}\n</tt-button>\n<tt-date-picker\n  v-model=\"selectedDate\"\n  v-model:show=\"showDate\"\n  title=\"Delivery date\"\n/>"
    },
    {
      "title": "Readonly Summary",
      "titleZh": "日期摘要展示",
      "desc": "",
      "descZh": "",
      "code": "<tt-card title=\"Estimated Delivery\">\n  <tt-typography type=\"title\" :level=\"4\">{{ selectedDate }}</tt-typography>\n</tt-card>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst visible = ref(false)\n</script>\n\n<tt-button variant=\"outline\" @click=\"visible = true\">Open DatePicker</tt-button>\n<tt-date-picker v-model:show=\"visible\" />"
    }
  ]
}
