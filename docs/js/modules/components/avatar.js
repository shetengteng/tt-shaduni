window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["avatar"] = {
  "id": "avatar",
  "cat": "display",
  "name": "Avatar",
  "desc": "User avatar with image, text fallback, and shape.",
  "descZh": "用户头像，支持图片、文字回退和形状切换。",
  "usage": "<tt-avatar src=\"url\" />\n<tt-avatar text=\"JD\" shape=\"square\" />",
  "props": [
    [
      "src",
      "string",
      "''"
    ],
    [
      "size",
      "string|number",
      "40"
    ],
    [
      "shape",
      "'circle'|'square'",
      "'circle'"
    ],
    [
      "text",
      "string",
      "''"
    ]
  ],
  "tag": "tt-avatar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-avatar src=\"url\" />\n<tt-avatar text=\"JD\" shape=\"square\" />"
    },
    {
      "title": "Image + Text Fallback",
      "titleZh": "图片 + 文字回退",
      "desc": "",
      "descZh": "",
      "code": "<tt-space :size=\"12\">\n  <tt-avatar src=\"https://dummyimage.com/120x120/171717/ffffff&text=A\" />\n  <tt-avatar text=\"JD\" />\n  <tt-avatar text=\"Ops\" shape=\"square\" />\n</tt-space>"
    }
  ]
}
