window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["countdown"] = {
  "id": "countdown",
  "cat": "display",
  "name": "CountDown",
  "desc": "Countdown timer with custom format.",
  "descZh": "倒计时组件，支持自定义格式。",
  "usage": "<tt-count-down :time=\"3600000\" format=\"HH:mm:ss\" />",
  "props": [
    [
      "time",
      "number",
      "0"
    ],
    [
      "format",
      "string",
      "'HH:mm:ss'"
    ],
    [
      "autoStart",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-count-down",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-count-down :time=\"3600000\" format=\"HH:mm:ss\" />"
    }
  ]
}
