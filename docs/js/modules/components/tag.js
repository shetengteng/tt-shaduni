window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["tag"] = {
  "id": "tag",
  "cat": "display",
  "name": "Tag",
  "desc": "Tag with type variants, closeable, and round mode.",
  "descZh": "标签，支持类型变体、可关闭和圆角模式。",
  "usage": "<tt-tag type=\"primary\">Primary</tt-tag>\n<tt-tag type=\"success\" closeable />",
  "props": [
    [
      "type",
      "'default'|'primary'|'success'|'warning'|'danger'",
      "'default'"
    ],
    [
      "closeable",
      "boolean",
      "false"
    ],
    [
      "round",
      "boolean",
      "false"
    ],
    [
      "size",
      "'sm'|'md'",
      "'md'"
    ]
  ],
  "tag": "tt-tag",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-tag type=\"primary\">Primary</tt-tag>\n<tt-tag type=\"success\" closeable />"
    },
    {
      "title": "Status Tags",
      "titleZh": "状态标签",
      "desc": "",
      "descZh": "",
      "code": "<tt-space wrap :size=\"8\">\n  <tt-tag type=\"default\">Draft</tt-tag>\n  <tt-tag type=\"primary\">Queued</tt-tag>\n  <tt-tag type=\"success\">Success</tt-tag>\n  <tt-tag type=\"danger\" closeable>Failed</tt-tag>\n</tt-space>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-tag>\n  New\n</tt-tag>"
    }
  ]
}
