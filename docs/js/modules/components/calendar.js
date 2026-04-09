window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["calendar"] = {
  "id": "calendar",
  "cat": "form",
  "name": "Calendar",
  "desc": "Month-view calendar with date selection, min/max range, and navigation.",
  "descZh": "月历视图，支持日期选择、最小/最大范围限制和月份导航。",
  "usage": "<tt-calendar v-model=\"selectedDate\" />\n<tt-calendar v-model=\"date\" min-date=\"2025-01-01\" max-date=\"2025-12-31\" />\n<tt-calendar v-model=\"date\" :first-day-of-week=\"1\" />",
  "props": [
    [
      "v-model",
      "string",
      "''"
    ],
    [
      "minDate",
      "string",
      "''"
    ],
    [
      "maxDate",
      "string",
      "''"
    ],
    [
      "firstDayOfWeek",
      "0|1",
      "0"
    ],
    [
      "readonly",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-calendar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-calendar v-model=\"selectedDate\" />\n<tt-calendar v-model=\"date\" min-date=\"2025-01-01\" max-date=\"2025-12-31\" />\n<tt-calendar v-model=\"date\" :first-day-of-week=\"1\" />"
    },
    {
      "title": "Range-limited Calendar",
      "titleZh": "带日期范围限制的月历",
      "desc": "",
      "descZh": "",
      "code": "<tt-calendar\n  v-model=\"selectedDate\"\n  min-date=\"2026-04-01\"\n  max-date=\"2026-04-30\"\n/>"
    },
    {
      "title": "Readonly Schedule Board",
      "titleZh": "只读日程面板",
      "desc": "",
      "descZh": "",
      "code": "<tt-calendar\n  v-model=\"selectedDate\"\n  :first-day-of-week=\"1\"\n  readonly\n/>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('demo')\n</script>\n\n<tt-calendar v-model=\"value\" />"
    }
  ]
}
