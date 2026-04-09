window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["button"] = {
  "id": "button",
  "cat": "basic",
  "name": "Button",
  "desc": "Primary interactive element with 6 variants, 4 sizes, loading/disabled states.",
  "descZh": "主要交互元素，支持 6 种风格变体、4 种尺寸、加载/禁用状态。",
  "usage": "<tt-button variant=\"default\">Click me</tt-button>\n<tt-button variant=\"destructive\">Delete</tt-button>\n<tt-button variant=\"outline\" size=\"sm\">Small</tt-button>\n<tt-button loading>Saving...</tt-button>",
  "props": [
    [
      "variant",
      "'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'",
      "'default'"
    ],
    [
      "size",
      "'sm'|'md'|'lg'|'icon'",
      "'md'"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ],
    [
      "loading",
      "boolean",
      "false"
    ],
    [
      "block",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-button",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-button variant=\"default\">Click me</tt-button>\n<tt-button variant=\"destructive\">Delete</tt-button>\n<tt-button variant=\"outline\" size=\"sm\">Small</tt-button>\n<tt-button loading>Saving...</tt-button>"
    },
    {
      "title": "Variant Matrix",
      "titleZh": "变体矩阵",
      "desc": "",
      "descZh": "",
      "code": "<tt-space wrap :size=\"12\">\n  <tt-button variant=\"default\">Primary</tt-button>\n  <tt-button variant=\"secondary\">Secondary</tt-button>\n  <tt-button variant=\"outline\">Outline</tt-button>\n  <tt-button variant=\"ghost\">Ghost</tt-button>\n</tt-space>"
    },
    {
      "title": "Loading + Block CTA",
      "titleZh": "加载态 + 通栏 CTA",
      "desc": "",
      "descZh": "",
      "code": "<tt-button block loading>\n  Saving project settings\n</tt-button>"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-button variant=\"outline\" disabled>\n  Continue\n</tt-button>"
    }
  ]
}
