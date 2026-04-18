window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["notify"] = {
  "id": "notify",
  "cat": "feedback",
  "name": "Notify",
  "desc": "Top banner notification with imperative API. Ideal for system messages (info/success/warning/error).",
  "descZh": "顶部横幅消息通知，支持命令式 API 调用（info/success/warning/error）。",
  "usage": "<tt-notify />\n\nnotify.success('Saved successfully')",
  "props": [
    [
      "show",
      "boolean",
      "false"
    ],
    [
      "message",
      "string",
      "''"
    ],
    [
      "type",
      "'info'|'success'|'warning'|'error'|'primary'",
      "'info'"
    ],
    [
      "duration",
      "number",
      "2500"
    ],
    [
      "position",
      "'top'|'bottom'",
      "'top'"
    ],
    [
      "safeAreaInsetTop",
      "boolean",
      "true"
    ],
    [
      "icon",
      "string",
      "''"
    ],
    [
      "color",
      "string",
      "''"
    ],
    [
      "background",
      "string",
      "''"
    ]
  ],
  "tag": "tt-notify",
  "examples": [
    {
      "title": "Imperative API",
      "titleZh": "命令式 API",
      "desc": "Place a single <tt-notify /> somewhere in your app (e.g. App.vue or main pages), then call notify.* anywhere.",
      "descZh": "在 App.vue 或主页面放置一个 <tt-notify />，然后在任意地方调用 notify.*。",
      "code": "import { notify } from 'tt-shaduni'\n\nnotify.info('Hello there')\nnotify.success('Saved successfully')\nnotify.warning('Please check input')\nnotify.error('Something went wrong')\nnotify.hide()"
    },
    {
      "title": "Declarative (v-model:show)",
      "titleZh": "声明式用法",
      "desc": "",
      "descZh": "",
      "code": "<tt-notify :show=\"visible\" message=\"Hello\" type=\"success\" @update:show=\"visible = $event\" />"
    },
    {
      "title": "Custom Style",
      "titleZh": "自定义样式",
      "desc": "",
      "descZh": "",
      "code": "notify({\n  message: 'Custom banner',\n  background: '#6366f1',\n  color: '#fff',\n  duration: 3000\n})"
    }
  ]
}
