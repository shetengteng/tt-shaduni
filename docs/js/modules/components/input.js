window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["input"] = {
  "id": "input",
  "cat": "form",
  "name": "Input",
  "desc": "Text input with v-model, multiple types, clearable, prefix/suffix slots.",
  "descZh": "文本输入框，支持 v-model、多种类型、清除按钮、前缀/后缀插槽。",
  "usage": "<tt-input v-model=\"value\" placeholder=\"Enter text\" />\n<tt-input v-model=\"search\" clearable />\n<tt-input type=\"password\" placeholder=\"Password\" />",
  "props": [
    [
      "v-model",
      "string|number",
      "''"
    ],
    [
      "type",
      "'text'|'password'|'number'",
      "'text'"
    ],
    [
      "placeholder",
      "string",
      "''"
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
    ]
  ],
  "tag": "tt-input",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-input v-model=\"value\" placeholder=\"Enter text\" />\n<tt-input v-model=\"search\" clearable />\n<tt-input type=\"password\" placeholder=\"Password\" />"
    },
    {
      "title": "Search With Prefix / Suffix",
      "titleZh": "带前后缀的搜索框",
      "desc": "",
      "descZh": "",
      "code": "<tt-input v-model=\"keyword\" clearable placeholder=\"Search releases\">\n  <template #prefix>\n    <tt-icon name=\"search\" />\n  </template>\n  <template #suffix>\n    <tt-tag size=\"sm\">⌘K</tt-tag>\n  </template>\n</tt-input>"
    },
    {
      "title": "Inline Form Field",
      "titleZh": "表单行内字段",
      "desc": "",
      "descZh": "",
      "code": "<tt-form-item label=\"Email\" required>\n  <tt-input v-model=\"form.email\" type=\"text\" placeholder=\"hello@team.dev\" />\n</tt-form-item>"
    },
    {
      "title": "Controlled State",
      "titleZh": "受控状态",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst value = ref('Search users')\n</script>\n\n<tt-input v-model=\"value\" clearable placeholder=\"Type here\" />"
    }
  ]
}
