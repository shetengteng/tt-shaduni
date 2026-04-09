window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["form"] = {
  "id": "form",
  "cat": "form",
  "name": "Form",
  "desc": "Form container with validation and label layout.",
  "descZh": "表单容器，支持校验规则和标签布局。",
  "usage": "<tt-form :model=\"form\" :rules=\"rules\">\n  <tt-form-item label=\"Name\">\n    <tt-input v-model=\"form.name\" />\n  </tt-form-item>\n</tt-form>",
  "props": [
    [
      "model",
      "Object",
      "{}"
    ],
    [
      "rules",
      "Object",
      "{}"
    ],
    [
      "labelWidth",
      "string",
      "'80px'"
    ]
  ],
  "tag": "tt-form",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-form :model=\"form\" :rules=\"rules\">\n  <tt-form-item label=\"Name\">\n    <tt-input v-model=\"form.name\" />\n  </tt-form-item>\n</tt-form>"
    },
    {
      "title": "Validation Rules",
      "titleZh": "带校验规则的表单",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { reactive } from 'vue'\n\nconst form = reactive({\n  name: '',\n  email: '',\n})\n\nconst rules = {\n  name: [{ required: true, message: 'Please enter your name' }],\n  email: [{ required: true, message: 'Please enter your email' }],\n}\n</script>\n\n<tt-form :model=\"form\" :rules=\"rules\" label-width=\"88px\">\n  <tt-form-item label=\"Name\" prop=\"name\">\n    <tt-input v-model=\"form.name\" />\n  </tt-form-item>\n  <tt-form-item label=\"Email\" prop=\"email\">\n    <tt-input v-model=\"form.email\" />\n  </tt-form-item>\n</tt-form>"
    },
    {
      "title": "Settings Form Layout",
      "titleZh": "设置页布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-form label-width=\"96px\">\n  <tt-form-item label=\"Project\">\n    <tt-input v-model=\"projectName\" />\n  </tt-form-item>\n  <tt-form-item label=\"Visibility\">\n    <tt-switch v-model=\"isPublic\" />\n  </tt-form-item>\n</tt-form>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-form>\n  <tt-form-item label=\"Name\"><tt-input v-model=\"form.name\" /></tt-form-item>\n</tt-form>"
    }
  ]
}
