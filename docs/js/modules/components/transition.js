window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["transition"] = {
  "id": "transition",
  "cat": "feedback",
  "name": "Transition",
  "desc": "Enter/leave animations: fade, slide-up/down/left/right, zoom.",
  "descZh": "进入/离开动画：淡入、上/下/左/右滑入、缩放。",
  "usage": "<tt-transition :show=\"visible\" name=\"fade\">\n  <view>Content</view>\n</tt-transition>",
  "props": [
    [
      "show",
      "boolean",
      "false"
    ],
    [
      "name",
      "'fade'|'slide-up'|'slide-down'|'zoom'",
      "'fade'"
    ],
    [
      "duration",
      "number",
      "300"
    ]
  ],
  "tag": "tt-transition",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-transition :show=\"visible\" name=\"fade\">\n  <view>Content</view>\n</tt-transition>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-transition>\n  <view class=\"demo-panel\">Animated block</view>\n</tt-transition>"
    }
  ]
}
