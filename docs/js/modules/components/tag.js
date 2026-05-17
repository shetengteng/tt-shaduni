window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["tag"] = {
  "id": "tag",
  "cat": "display",
  "name": "Tag",
  "desc": "Tag with type variants, dashed variant, closeable and round mode.",
  "descZh": "标签，支持 5 种语义类型、虚线边框变体、可关闭与圆角模式。",
  "usage": "<tt-tag type=\"primary\">Primary</tt-tag>\n<tt-tag round variant=\"dashed\">+ Add</tt-tag>",
  "props": [
    [
      "type",
      "'default'|'primary'|'success'|'warning'|'danger'",
      "'default'"
    ],
    [
      "variant",
      "'solid' | 'dashed'",
      "'solid'"
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
      "title": "Dashed Variant",
      "titleZh": "虚线边框变体",
      "desc": "`variant=\"dashed\"` renders an outlined dashed tag — handy for add-tag / placeholder slots. Combine with `type` to tint the border and text.",
      "descZh": "`variant=\"dashed\"` 渲染为透明背景 + 虚线边框，适合 add-tag / 占位场景；与 `type` 组合可调整描边与文字颜色。",
      "code": "<tt-space wrap :size=\"8\">\n  <tt-tag round variant=\"dashed\">+ Add</tt-tag>\n  <tt-tag round variant=\"dashed\" type=\"primary\">+ Tag</tt-tag>\n  <tt-tag round variant=\"dashed\" type=\"success\">+ Done</tt-tag>\n  <tt-tag round variant=\"dashed\" type=\"danger\">+ Remove</tt-tag>\n</tt-space>"
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
