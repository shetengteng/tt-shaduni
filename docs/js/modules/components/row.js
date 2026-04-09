window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["row"] = {
  "id": "row",
  "cat": "layout",
  "name": "Row",
  "desc": "Flex row container for 12-column grid layout.",
  "descZh": "Flex 行容器，用于 12 列栅格布局。",
  "usage": "<tt-row :gutter=\"16\">\n  <tt-col :span=\"12\">Left</tt-col>\n  <tt-col :span=\"12\">Right</tt-col>\n</tt-row>",
  "props": [
    [
      "gutter",
      "number",
      "0"
    ],
    [
      "justify",
      "'start'|'end'|'center'|'space-around'|'space-between'",
      "'start'"
    ],
    [
      "align",
      "'top'|'middle'|'bottom'",
      "'top'"
    ],
    [
      "wrap",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-row",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-row :gutter=\"16\">\n  <tt-col :span=\"12\">Left</tt-col>\n  <tt-col :span=\"12\">Right</tt-col>\n</tt-row>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-row>\n  <tt-col :span=\"12\">Left</tt-col>\n  <tt-col :span=\"12\">Right</tt-col>\n</tt-row>"
    }
  ]
}
