window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["dialog"] = {
  "id": "dialog",
  "cat": "feedback",
  "name": "Dialog",
  "desc": "Modal dialog for confirmations with confirm/cancel buttons.",
  "descZh": "模态对话框，支持确认/取消按钮。",
  "usage": "<tt-dialog v-model:show=\"visible\" title=\"Confirm\" message=\"Sure?\" />",
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
      "message",
      "string",
      "''"
    ],
    [
      "confirmText",
      "string",
      "'Confirm'"
    ],
    [
      "cancelText",
      "string",
      "'Cancel'"
    ]
  ],
  "tag": "tt-dialog",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-dialog v-model:show=\"visible\" title=\"Confirm\" message=\"Sure?\" />"
    },
    {
      "title": "Action Confirmation",
      "titleZh": "确认操作弹窗",
      "desc": "",
      "descZh": "",
      "code": "<tt-button variant=\"destructive\" @click=\"showDialog = true\">Delete</tt-button>\n<tt-dialog\n  v-model:show=\"showDialog\"\n  title=\"Delete workspace?\"\n  message=\"This action cannot be undone.\"\n  confirm-text=\"Delete\"\n  cancel-text=\"Keep it\"\n/>"
    },
    {
      "title": "Async Confirm Flow",
      "titleZh": "异步确认流程",
      "desc": "",
      "descZh": "",
      "code": "<tt-dialog\n  v-model:show=\"showDialog\"\n  title=\"Publish release notes?\"\n  message=\"The release notes will become visible to users.\"\n  @confirm=\"publishRelease\"\n/>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst visible = ref(false)\n</script>\n\n<tt-button variant=\"outline\" @click=\"visible = true\">Open Dialog</tt-button>\n<tt-dialog v-model:show=\"visible\" title=\"Confirm\" message=\"Continue with this action?\" />"
    }
  ]
}
