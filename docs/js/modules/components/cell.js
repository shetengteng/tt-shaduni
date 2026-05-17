window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["cell"] = {
  "id": "cell",
  "cat": "navigation",
  "name": "Cell",
  "desc": "List cell with title, value, label, link arrow, and optional active-state feedback.",
  "descZh": "单元格，支持标题、数值、标签、链接箭头与可选的点击反馈。",
  "usage": "<tt-cell title=\"Setting\" value=\"Enabled\" is-link />",
  "props": [
    [
      "title",
      "string",
      "''"
    ],
    [
      "value",
      "string",
      "''"
    ],
    [
      "label",
      "string",
      "''"
    ],
    [
      "icon",
      "string",
      "''"
    ],
    [
      "isLink",
      "boolean",
      "false"
    ],
    [
      "border",
      "boolean",
      "true"
    ],
    [
      "hover",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-cell",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-cell title=\"Setting\" value=\"Enabled\" is-link />"
    },
    {
      "title": "Display Only",
      "titleZh": "纯展示",
      "desc": "Omit `is-link` and the cell renders without arrow or pointer cursor — useful for pure-display rows.",
      "descZh": "不传 `is-link` 时，单元格没有箭头与点击反馈，适合纯展示场景。",
      "code": "<tt-cell title=\"Version\" value=\"v1.0.0\" />"
    },
    {
      "title": "Hover Feedback",
      "titleZh": "点击反馈",
      "desc": "`hover` defaults to true and pairs with `is-link` to show a muted `:active` background. Set `hover=false` to keep tappable rows visually static.",
      "descZh": "`hover` 默认开启，与 `is-link` 联动显示 `:active` 灰底反馈；设置 `hover=false` 可让可点击行保持视觉静态。",
      "code": "<tt-cell title=\"Tap me\" value=\"Go\" is-link />\n<tt-cell title=\"No feedback\" value=\"Go\" is-link :hover=\"false\" />"
    },
    {
      "title": "With Label",
      "titleZh": "带副标题",
      "desc": "`label` shows a smaller line below the title.",
      "descZh": "`label` 在标题下方渲染一个较小的副标题。",
      "code": "<tt-cell\n  title=\"Notification\"\n  label=\"Email and push messages\"\n  is-link\n/>"
    },
    {
      "title": "Hide Bottom Border",
      "titleZh": "隐藏底部边框",
      "desc": "Set `:border=\"false\"` on the last cell in a list section to avoid double borders.",
      "descZh": "在列表分组的最后一个单元格上设置 `:border=\"false\"`，避免与外层容器双重边框。",
      "code": "<tt-cell title=\"Last item\" value=\"\" :border=\"false\" />"
    }
  ]
}
