window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["search"] = {
  "id": "search",
  "cat": "form",
  "name": "Search",
  "desc": "Search input with icon, optional clear button, ghost variant and cancel flow.",
  "descZh": "搜索输入框，带搜索图标、可选清除按钮、ghost 变体与取消流程。",
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
      "''"
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
    ],
    [
      "clearable",
      "boolean",
      "false"
    ],
    [
      "variant",
      "'default' | 'ghost'",
      "'default'"
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
      "title": "Ghost Variant",
      "titleZh": "Ghost 变体",
      "desc": "Use `variant=\"ghost\"` for a white background with a border instead of the default muted background.",
      "descZh": "`variant=\"ghost\"` 渲染为白底+边框，替代默认的灰底样式。",
      "code": "<tt-search\n  v-model=\"keyword\"\n  placeholder=\"Search component docs\"\n  variant=\"ghost\"\n/>"
    },
    {
      "title": "Clearable",
      "titleZh": "可清空",
      "desc": "Set `clearable` to render a small clear icon when the input has a value; emits `clear`.",
      "descZh": "设置 `clearable` 后，输入框有内容时显示清除图标；触发 `clear` 事件。",
      "code": "<tt-search\n  v-model=\"keyword\"\n  clearable\n  placeholder=\"Type to see the clear button\"\n  @clear=\"console.log('cleared')\"\n/>"
    },
    {
      "title": "Toolbar Search",
      "titleZh": "工具栏搜索",
      "desc": "",
      "descZh": "",
      "code": "<tt-config-provider :theme-vars=\"{ radius: '16rpx' }\">\n  <tt-search v-model=\"keyword\" placeholder=\"Search component docs\" />\n</tt-config-provider>"
    }
  ]
}
