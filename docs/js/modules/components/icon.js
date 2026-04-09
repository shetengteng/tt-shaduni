window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["icon"] = {
  "id": "icon",
  "cat": "basic",
  "name": "Icon",
  "desc": "Icon component with custom name, size, and color support.",
  "descZh": "图标组件，支持自定义名称、尺寸和颜色。",
  "usage": "<tt-icon name=\"home\" />\n<tt-icon name=\"close\" size=\"24\" color=\"red\" />",
  "props": [
    [
      "name",
      "string",
      "required"
    ],
    [
      "size",
      "string|number",
      "16"
    ],
    [
      "color",
      "string",
      "''"
    ]
  ],
  "tag": "tt-icon",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-icon name=\"home\" />\n<tt-icon name=\"close\" size=\"24\" color=\"red\" />"
    },
    {
      "title": "Size + Color",
      "titleZh": "尺寸与颜色",
      "desc": "",
      "descZh": "",
      "code": "<tt-space :size=\"16\">\n  <tt-icon name=\"search\" size=\"18\" />\n  <tt-icon name=\"check\" size=\"22\" color=\"#16a34a\" />\n  <tt-icon name=\"close\" size=\"22\" color=\"#ef4444\" />\n</tt-space>"
    }
  ]
}
