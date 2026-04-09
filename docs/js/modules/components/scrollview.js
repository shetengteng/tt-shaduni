window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["scrollview"] = {
  "id": "scrollview",
  "cat": "layout",
  "name": "ScrollView",
  "desc": "Enhanced scroll-view with pull-refresh and infinite scroll.",
  "descZh": "增强滚动视图，支持下拉刷新和无限滚动。",
  "usage": "<tt-scroll-view refresher-enabled @refresh=\"onRefresh\" @scrolltolower=\"onLoad\">\n  <view>Content</view>\n</tt-scroll-view>",
  "props": [
    [
      "scrollX",
      "boolean",
      "false"
    ],
    [
      "scrollY",
      "boolean",
      "true"
    ],
    [
      "refresherEnabled",
      "boolean",
      "false"
    ],
    [
      "refresherTriggered",
      "boolean",
      "false"
    ],
    [
      "lowerThreshold",
      "number",
      "50"
    ]
  ],
  "tag": "tt-scroll-view",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-scroll-view refresher-enabled @refresh=\"onRefresh\" @scrolltolower=\"onLoad\">\n  <view>Content</view>\n</tt-scroll-view>"
    }
  ]
}
