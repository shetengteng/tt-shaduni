window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["noticebar"] = {
  "id": "noticebar",
  "cat": "feedback",
  "name": "NoticeBar",
  "desc": "Scrollable notification bar with close button.",
  "descZh": "通知栏，支持滚动和关闭按钮。",
  "usage": "<tt-notice-bar text=\"Notice!\" closeable />",
  "props": [
    [
      "text",
      "string",
      "''"
    ],
    [
      "color",
      "string",
      "''"
    ],
    [
      "background",
      "string",
      "''"
    ],
    [
      "closeable",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-notice-bar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-notice-bar text=\"Notice!\" closeable />"
    }
  ]
}
