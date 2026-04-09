window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["swipeaction"] = {
  "id": "swipeaction",
  "cat": "feedback",
  "name": "SwipeAction",
  "desc": "Left/right swipe to reveal action buttons.",
  "descZh": "左右滑动显示操作按钮。",
  "usage": "<tt-swipe-action>\n  <tt-cell title=\"Swipe me\" />\n</tt-swipe-action>",
  "props": [
    [
      "leftActions",
      "SwipeActionButton[]",
      "[]"
    ],
    [
      "rightActions",
      "SwipeActionButton[]",
      "[Delete]"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ],
    [
      "autoClose",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-swipe-action",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-swipe-action>\n  <tt-cell title=\"Swipe me\" />\n</tt-swipe-action>"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-swipe-action disabled>\n  <tt-cell title=\"Order #2401\" value=\"Pending\" />\n</tt-swipe-action>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-swipe-action>\n  <tt-cell title=\"Order #2401\" value=\"Pending\" />\n</tt-swipe-action>"
    }
  ]
}
