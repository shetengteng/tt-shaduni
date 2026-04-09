window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["badge"] = {
  "id": "badge",
  "cat": "display",
  "name": "Badge",
  "desc": "Badge with number, max cap, and dot mode.",
  "descZh": "徽标，支持数字、上限和红点模式。",
  "usage": "<tt-badge :value=\"5\"><tt-button>Messages</tt-button></tt-badge>",
  "props": [
    [
      "value",
      "string|number",
      "''"
    ],
    [
      "max",
      "number",
      "99"
    ],
    [
      "dot",
      "boolean",
      "false"
    ],
    [
      "hidden",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-badge",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-badge :value=\"5\"><tt-button>Messages</tt-button></tt-badge>"
    },
    {
      "title": "Dot + Count",
      "titleZh": "数字 + 红点模式",
      "desc": "",
      "descZh": "",
      "code": "<tt-space :size=\"16\">\n  <tt-badge :value=\"8\"><tt-button variant=\"outline\">Inbox</tt-button></tt-badge>\n  <tt-badge dot><tt-button variant=\"ghost\">Live</tt-button></tt-badge>\n</tt-space>"
    }
  ]
}
