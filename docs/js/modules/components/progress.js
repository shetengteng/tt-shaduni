window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["progress"] = {
  "id": "progress",
  "cat": "display",
  "name": "Progress",
  "desc": "Linear progress bar with percentage text.",
  "descZh": "线性进度条，支持百分比文字显示。",
  "usage": "<tt-progress :percentage=\"75\" />",
  "props": [
    [
      "percentage",
      "number",
      "0"
    ],
    [
      "strokeWidth",
      "number",
      "8"
    ],
    [
      "color",
      "string",
      "''"
    ],
    [
      "showText",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-progress",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-progress :percentage=\"75\" />"
    },
    {
      "title": "Color-coded Progress",
      "titleZh": "分阶段进度条",
      "desc": "",
      "descZh": "",
      "code": "<tt-space direction=\"vertical\" :size=\"12\">\n  <tt-progress :percentage=\"32\" color=\"#0f766e\" />\n  <tt-progress :percentage=\"68\" color=\"#2563eb\" />\n  <tt-progress :percentage=\"100\" color=\"#16a34a\" />\n</tt-space>"
    }
  ]
}
