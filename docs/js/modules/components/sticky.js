window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["sticky"] = {
  "id": "sticky",
  "cat": "layout",
  "name": "Sticky",
  "desc": "Sticky positioning component with offset-top.",
  "descZh": "吸顶组件，支持偏移量设置。",
  "usage": "<tt-sticky :offset-top=\"56\">\n  <view>Sticks to top</view>\n</tt-sticky>",
  "props": [
    [
      "offsetTop",
      "number",
      "0"
    ],
    [
      "zIndex",
      "number",
      "99"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-sticky",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-sticky :offset-top=\"56\">\n  <view>Sticks to top</view>\n</tt-sticky>"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-sticky disabled>\n  <view class=\"toolbar\">Filter Bar</view>\n</tt-sticky>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-sticky>\n  <view class=\"toolbar\">Filter Bar</view>\n</tt-sticky>"
    }
  ]
}
