window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["skeleton"] = {
  "id": "skeleton",
  "cat": "display",
  "name": "Skeleton",
  "desc": "Loading placeholder with avatar, title, and rows.",
  "descZh": "骨架屏加载占位，支持头像、标题和行数。",
  "usage": "<tt-skeleton :loading=\"true\" avatar :rows=\"3\" />",
  "props": [
    [
      "loading",
      "boolean",
      "true"
    ],
    [
      "rows",
      "number",
      "3"
    ],
    [
      "avatar",
      "boolean",
      "false"
    ],
    [
      "title",
      "boolean",
      "true"
    ],
    [
      "animate",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-skeleton",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-skeleton :loading=\"true\" avatar :rows=\"3\" />"
    }
  ]
}
