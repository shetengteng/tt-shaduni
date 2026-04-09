window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["toast"] = {
  "id": "toast",
  "cat": "feedback",
  "name": "Toast",
  "desc": "Lightweight message popup with success/fail/loading types.",
  "descZh": "轻量消息提示，支持成功/失败/加载类型。",
  "usage": "<tt-toast :show=\"visible\" message=\"Done!\" type=\"success\" />",
  "props": [
    [
      "show",
      "boolean",
      "false"
    ],
    [
      "message",
      "string",
      "''"
    ],
    [
      "type",
      "'text'|'success'|'fail'|'loading'",
      "'text'"
    ],
    [
      "duration",
      "number",
      "2000"
    ]
  ],
  "tag": "tt-toast",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-toast :show=\"visible\" message=\"Done!\" type=\"success\" />"
    },
    {
      "title": "Status Toasts",
      "titleZh": "状态提示",
      "desc": "",
      "descZh": "",
      "code": "<tt-toast :show=\"toast.show\" :message=\"toast.message\" :type=\"toast.type\" />\n\n<tt-space :size=\"8\">\n  <tt-button size=\"sm\" @click=\"openToast('Saved', 'success')\">Success</tt-button>\n  <tt-button size=\"sm\" variant=\"outline\" @click=\"openToast('Syncing…', 'loading')\">Loading</tt-button>\n</tt-space>"
    },
    {
      "title": "Manual Lifetime",
      "titleZh": "手动控制关闭时机",
      "desc": "",
      "descZh": "",
      "code": "<tt-toast :show=\"showToast\" type=\"text\" :duration=\"1200\" message=\"Draft autosaved\" />"
    }
  ]
}
