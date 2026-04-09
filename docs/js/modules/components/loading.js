window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["loading"] = {
  "id": "loading",
  "cat": "feedback",
  "name": "Loading",
  "desc": "Loading spinner with text and vertical layout.",
  "descZh": "加载指示器，支持文字和垂直布局。",
  "usage": "<tt-loading text=\"Loading...\" />",
  "props": [
    [
      "size",
      "string|number",
      "24"
    ],
    [
      "color",
      "string",
      "''"
    ],
    [
      "text",
      "string",
      "''"
    ],
    [
      "vertical",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-loading",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-loading text=\"Loading...\" />"
    },
    {
      "title": "Inline / Vertical Loading",
      "titleZh": "行内 / 垂直加载",
      "desc": "",
      "descZh": "",
      "code": "<tt-space :size=\"16\">\n  <tt-loading text=\"Syncing...\" />\n  <tt-loading vertical text=\"Uploading\" />\n</tt-space>"
    }
  ]
}
