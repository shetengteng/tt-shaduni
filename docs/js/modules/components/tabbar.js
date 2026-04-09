window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["tabbar"] = {
  "id": "tabbar",
  "cat": "navigation",
  "name": "Tabbar",
  "desc": "Bottom tab bar with fixed positioning.",
  "descZh": "底部标签栏，支持固定定位。",
  "usage": "<tt-tabbar v-model=\"active\" />",
  "props": [
    [
      "v-model",
      "number",
      "0"
    ],
    [
      "fixed",
      "boolean",
      "true"
    ],
    [
      "border",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-tabbar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-tabbar v-model=\"active\" />"
    }
  ]
}
