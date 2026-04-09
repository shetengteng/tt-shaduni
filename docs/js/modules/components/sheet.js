window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["sheet"] = {
  "id": "sheet",
  "cat": "feedback",
  "name": "Sheet",
  "desc": "Bottom/right sheet with title and close.",
  "descZh": "底部/右侧面板，支持标题和关闭。",
  "usage": "<tt-sheet v-model:show=\"visible\" title=\"Options\">\n  <text>Content</text>\n</tt-sheet>",
  "props": [
    [
      "v-model:show",
      "boolean",
      "false"
    ],
    [
      "position",
      "'bottom'|'right'",
      "'bottom'"
    ],
    [
      "title",
      "string",
      "''"
    ]
  ],
  "tag": "tt-sheet",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-sheet v-model:show=\"visible\" title=\"Options\">\n  <text>Content</text>\n</tt-sheet>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst visible = ref(false)\n</script>\n\n<tt-button variant=\"outline\" @click=\"visible = true\">Open Sheet</tt-button>\n<tt-sheet v-model:show=\"visible\" title=\"Quick filters\">\n  <view style=\"padding: 24rpx;\">Panel content</view>\n</tt-sheet>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-sheet title=\"Quick filters\">\n  <view style=\"padding: 24rpx;\">Panel content</view>\n</tt-sheet>"
    }
  ]
}
