window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["list"] = {
  "id": "list",
  "cat": "display",
  "name": "List",
  "desc": "List with loading and finished states for infinite scroll.",
  "descZh": "列表组件，支持加载中和完成状态的无限滚动。",
  "usage": "<tt-list :loading=\"loading\" :finished=\"finished\" @load=\"onLoad\">\n  <view v-for=\"item in items\">...</view>\n</tt-list>",
  "props": [
    [
      "loading",
      "boolean",
      "false"
    ],
    [
      "finished",
      "boolean",
      "false"
    ],
    [
      "loadingText",
      "string",
      "'Loading...'"
    ],
    [
      "finishedText",
      "string",
      "'No more data'"
    ],
    [
      "offset",
      "number",
      "300"
    ]
  ],
  "tag": "tt-list",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-list :loading=\"loading\" :finished=\"finished\" @load=\"onLoad\">\n  <view v-for=\"item in items\">...</view>\n</tt-list>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-list>\n  <view v-for=\"item in items\" :key=\"item.id\">{{ item.title }}</view>\n</tt-list>"
    }
  ]
}
