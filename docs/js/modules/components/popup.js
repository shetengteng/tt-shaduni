window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["popup"] = {
  "id": "popup",
  "cat": "feedback",
  "name": "Popup",
  "desc": "Base popup layer with 5 positions and overlay.",
  "descZh": "基础弹出层，支持 5 个位置和遮罩层。",
  "usage": "<tt-popup v-model:show=\"visible\" position=\"bottom\" round>\n  <view>Content</view>\n</tt-popup>",
  "props": [
    [
      "v-model:show",
      "boolean",
      "false"
    ],
    [
      "position",
      "'center'|'top'|'bottom'|'left'|'right'",
      "'center'"
    ],
    [
      "overlay",
      "boolean",
      "true"
    ],
    [
      "closeable",
      "boolean",
      "false"
    ],
    [
      "round",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-popup",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-popup v-model:show=\"visible\" position=\"bottom\" round>\n  <view>Content</view>\n</tt-popup>"
    },
    {
      "title": "Bottom Sheet Entry",
      "titleZh": "底部弹出层",
      "desc": "",
      "descZh": "",
      "code": "<tt-button @click=\"showPopup = true\">Open Sheet</tt-button>\n<tt-popup v-model:show=\"showPopup\" position=\"bottom\" round closeable>\n  <view style=\"padding: 32rpx;\">Quick actions and filters</view>\n</tt-popup>"
    },
    {
      "title": "Centered Confirmation",
      "titleZh": "居中确认层",
      "desc": "",
      "descZh": "",
      "code": "<tt-popup v-model:show=\"showDialog\" position=\"center\">\n  <view style=\"padding: 32rpx; text-align: center;\">\n    <tt-typography type=\"title\" :level=\"4\">Unsaved changes</tt-typography>\n  </view>\n</tt-popup>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst visible = ref(false)\n</script>\n\n<tt-button variant=\"outline\" @click=\"visible = true\">Open Popup</tt-button>\n<tt-popup v-model:show=\"visible\" position=\"bottom\" round>\n  <view style=\"padding: 24rpx;\">Popup content</view>\n</tt-popup>"
    }
  ]
}
