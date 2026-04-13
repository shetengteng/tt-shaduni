window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["tabbar"] = {
  "id": "tabbar",
  "cat": "navigation",
  "name": "Tabbar",
  "desc": "Bottom tab bar with icon support. Icons use full Remix Icon names (ri-xxx-line / ri-xxx-fill).",
  "descZh": "底部标签栏，支持图标。图标使用完整的 Remix Icon 名称（ri-xxx-line / ri-xxx-fill）。",
  "usage": "<tt-tabbar v-model=\"active\" :items=\"items\" />",
  "props": [
    [
      "v-model",
      "number",
      "0"
    ],
    [
      "items",
      "TabbarItem[]",
      "[]"
    ],
    [
      "fixed",
      "boolean",
      "true"
    ],
    [
      "border",
      "boolean",
      "true"
    ],
    [
      "safeAreaInsetBottom",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-tabbar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "Pass items with text and icon (full ri-xxx name).",
      "descZh": "传入包含 text 和 icon（完整 ri-xxx 名称）的 items。",
      "code": "<template>\n  <tt-tabbar v-model=\"active\" :items=\"items\" :fixed=\"false\" />\n</template>\n\n<script setup>\nconst active = ref(0)\nconst items = [\n  { text: 'Home', icon: 'ri-home-line' },\n  { text: 'List', icon: 'ri-menu-line' },\n  { text: 'Me', icon: 'ri-user-line' },\n]\n</script>"
    },
    {
      "title": "TabbarItem Type",
      "titleZh": "TabbarItem 类型",
      "desc": "Each item has text (required) and icon (optional, full ri-xxx name).",
      "descZh": "每个 item 包含 text（必填）和 icon（可选，完整 ri-xxx 名称）。",
      "code": "interface TabbarItem {\n  text: string\n  icon?: string  // e.g. 'ri-home-line'\n}"
    }
  ]
}
