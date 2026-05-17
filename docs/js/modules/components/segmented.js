window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["segmented"] = {
  "id": "segmented",
  "cat": "form",
  "name": "Segmented",
  "desc": "Inline segmented control bound to a v-model and driven by an options array.",
  "descZh": "内联分段控件，使用 v-model 与 options 数组驱动选项。",
  "usage": "<tt-segmented v-model=\"view\" :options=\"options\" />",
  "props": [
    [
      "v-model",
      "string | number",
      "''"
    ],
    [
      "options",
      "Array<{label,value,disabled?}>",
      "[]"
    ],
    [
      "size",
      "'sm' | 'md' | 'lg'",
      "'md'"
    ],
    [
      "block",
      "boolean",
      "true"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-segmented",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst view = ref('day')\nconst options = [\n  { label: 'Day', value: 'day' },\n  { label: 'Week', value: 'week' },\n  { label: 'Month', value: 'month' },\n]\n</script>\n\n<tt-segmented v-model=\"view\" :options=\"options\" />"
    },
    {
      "title": "Size Variants",
      "titleZh": "尺寸变体",
      "desc": "",
      "descZh": "",
      "code": "<tt-segmented v-model=\"v\" :options=\"options\" size=\"sm\" />\n<tt-segmented v-model=\"v\" :options=\"options\" size=\"md\" />\n<tt-segmented v-model=\"v\" :options=\"options\" size=\"lg\" />"
    },
    {
      "title": "Disabled Option",
      "titleZh": "禁用单项",
      "desc": "Use `disabled: true` per option to gate clicks; the whole control can also be disabled.",
      "descZh": "在 option 上设置 `disabled: true` 即可禁用单项，也可整体禁用。",
      "code": "<tt-segmented\n  v-model=\"v\"\n  :options=\"[\n    { label: 'One', value: 'one' },\n    { label: 'Two', value: 'two', disabled: true },\n    { label: 'Three', value: 'three' },\n  ]\"\n/>"
    },
    {
      "title": "Custom Item Slot",
      "titleZh": "自定义渲染插槽",
      "desc": "Render arbitrary content per option via the `item` slot.",
      "descZh": "通过 `item` 插槽自定义每个选项的渲染。",
      "code": "<tt-segmented v-model=\"v\" :options=\"options\">\n  <template #item=\"{ option, active }\">\n    <tt-icon name=\"ri-check-line\" v-if=\"active\" />\n    <text>{{ option.label }}</text>\n  </template>\n</tt-segmented>"
    }
  ]
}
