window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["indexbar"] = {
  "id": "indexbar",
  "cat": "navigation",
  "name": "IndexBar",
  "desc": "Alphabetical index sidebar for quick navigation.",
  "descZh": "字母索引栏，用于快速定位导航。",
  "usage": "<tt-index-bar @select=\"onSelect\">\n  <view>Content</view>\n</tt-index-bar>",
  "props": [
    [
      "indexList",
      "string[]",
      "A-Z"
    ],
    [
      "activeIndex",
      "string",
      "''"
    ]
  ],
  "tag": "tt-index-bar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-index-bar @select=\"onSelect\">\n  <view>Content</view>\n</tt-index-bar>"
    }
  ]
}
