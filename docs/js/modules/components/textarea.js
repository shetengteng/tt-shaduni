window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["textarea"] = {
  "id": "textarea",
  "cat": "form",
  "name": "Textarea",
  "desc": "Multi-line text input with auto-height and word count.",
  "descZh": "多行文本输入，支持自动高度和字数统计。",
  "usage": "<tt-textarea v-model=\"text\" placeholder=\"Enter...\" />\n<tt-textarea v-model=\"text\" :maxlength=\"200\" show-count />",
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
      "maxlength",
      "number",
      "-1"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ],
    [
      "showCount",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-textarea",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-textarea v-model=\"text\" placeholder=\"Enter...\" />\n<tt-textarea v-model=\"text\" :maxlength=\"200\" show-count />"
    },
    {
      "title": "Feedback Composer",
      "titleZh": "反馈输入区",
      "desc": "",
      "descZh": "",
      "code": "<tt-textarea\n  v-model=\"feedback\"\n  :maxlength=\"240\"\n  show-count\n  auto-height\n  placeholder=\"Tell us what blocked your workflow...\"\n/>"
    },
    {
      "title": "Readonly Summary",
      "titleZh": "只读摘要",
      "desc": "",
      "descZh": "",
      "code": "<tt-textarea\n  :model-value=\"summary\"\n  :maxlength=\"500\"\n  disabled\n  show-count\n/>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('Everything looks ready for launch.')\n</script>\n\n<tt-textarea v-model=\"value\" show-count :maxlength=\"120\" />"
    }
  ]
}
