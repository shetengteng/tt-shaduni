window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["dropdownmenu"] = {
  "id": "dropdownmenu",
  "cat": "navigation",
  "name": "DropdownMenu",
  "desc": "Dropdown filter/sort menu with option selection.",
  "descZh": "下拉筛选/排序菜单，支持选项选择。",
  "usage": "<tt-dropdown-menu v-model=\"val\" :options=\"opts\" title=\"Sort\" />",
  "props": [
    [
      "v-model",
      "string|number",
      "''"
    ],
    [
      "options",
      "DropdownOption[]",
      "[]"
    ],
    [
      "title",
      "string",
      "''"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-dropdown-menu",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-dropdown-menu v-model=\"val\" :options=\"opts\" title=\"Sort\" />"
    }
  ]
}
