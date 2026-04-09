window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["search"] = {
  "id": "search",
  "cat": "form",
  "name": "Search",
  "desc": "Search input with icon and cancel button.",
  "descZh": "搜索输入框，带搜索图标和取消按钮。",
  "usage": "<tt-search v-model=\"keyword\" placeholder=\"Search...\" show-cancel />",
  "props": [
    [
      "v-model",
      "string",
      "''"
    ],
    [
      "placeholder",
      "string",
      "'Search'"
    ],
    [
      "showCancel",
      "boolean",
      "false"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-search",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-search v-model=\"keyword\" placeholder=\"Search...\" show-cancel />"
    },
    {
      "title": "Search With Cancel Flow",
      "titleZh": "带取消操作的搜索框",
      "desc": "",
      "descZh": "",
      "code": "<tt-search\n  v-model=\"keyword\"\n  show-cancel\n  placeholder=\"Search orders / users / tickets\"\n  @search=\"fetchResults\"\n  @cancel=\"keyword = ''\"\n/>"
    },
    {
      "title": "Toolbar Search",
      "titleZh": "工具栏搜索",
      "desc": "",
      "descZh": "",
      "code": "<tt-config-provider :theme-vars=\"{ radius: '16rpx' }\">\n  <tt-search v-model=\"keyword\" placeholder=\"Search component docs\" />\n</tt-config-provider>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('Release notes')\n</script>\n\n<tt-search v-model=\"value\" show-cancel placeholder=\"Search...\" />"
    }
  ]
}
