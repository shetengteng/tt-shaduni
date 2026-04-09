window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["actionsheet"] = {
  "id": "actionsheet",
  "cat": "feedback",
  "name": "ActionSheet",
  "desc": "Bottom action menu with cancel button.",
  "descZh": "底部操作面板，带取消按钮。",
  "usage": "<tt-action-sheet v-model:show=\"visible\" :actions=\"actions\" />",
  "props": [
    [
      "v-model:show",
      "boolean",
      "false"
    ],
    [
      "title",
      "string",
      "''"
    ],
    [
      "actions",
      "Array<{name,disabled?,color?}>",
      "[]"
    ],
    [
      "cancelText",
      "string",
      "'Cancel'"
    ]
  ],
  "tag": "tt-action-sheet",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-action-sheet v-model:show=\"visible\" :actions=\"actions\" />"
    },
    {
      "title": "Action Menu Trigger",
      "titleZh": "操作面板触发",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nconst actions = [\n  { name: 'Pin' },\n  { name: 'Share' },\n  { name: 'Delete', color: '#ef4444' },\n]\n</script>\n\n<tt-button variant=\"outline\" @click=\"showActions = true\">More</tt-button>\n<tt-action-sheet\n  v-model:show=\"showActions\"\n  title=\"Choose action\"\n  :actions=\"actions\"\n/>"
    },
    {
      "title": "Danger Actions",
      "titleZh": "危险操作组",
      "desc": "",
      "descZh": "",
      "code": "<tt-action-sheet\n  v-model:show=\"showActions\"\n  :actions=\"[\n    { name: 'Archive' },\n    { name: 'Delete permanently', color: '#ef4444' }\n  ]\"\n/>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst visible = ref(false)\n</script>\n\n<tt-button variant=\"outline\" @click=\"visible = true\">Open ActionSheet</tt-button>\n<tt-action-sheet v-model:show=\"visible\" />"
    }
  ]
}
