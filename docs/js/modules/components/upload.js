window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["upload"] = {
  "id": "upload",
  "cat": "form",
  "name": "Upload",
  "desc": "Image/file uploader with preview, delete, and count limit.",
  "descZh": "图片/文件上传，支持预览、删除和数量限制。",
  "usage": "<tt-upload v-model:file-list=\"files\" :max-count=\"9\" />",
  "props": [
    [
      "v-model:fileList",
      "UploadFile[]",
      "[]"
    ],
    [
      "maxCount",
      "number",
      "9"
    ],
    [
      "accept",
      "string",
      "'image'"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ],
    [
      "deletable",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-upload",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-upload v-model:file-list=\"files\" :max-count=\"9\" />"
    },
    {
      "title": "Preloaded Images",
      "titleZh": "预加载图片",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst files = [\n  { url: 'https://dummyimage.com/160x160/171717/ffffff&text=Cover' },\n]\n</script>\n\n<tt-upload v-model:file-list=\"files\" :max-count=\"6\" />"
    },
    {
      "title": "Attachment Wall",
      "titleZh": "附件墙",
      "desc": "",
      "descZh": "",
      "code": "<tt-upload\n  v-model:file-list=\"attachments\"\n  accept=\"image\"\n  :max-count=\"9\"\n  deletable\n/>"
    }
  ]
}
