window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["colorpicker"] = {
  "id": "colorpicker",
  "cat": "form",
  "name": "ColorPicker",
  "desc": "Inline color swatches with a popup color grid. Supports recommended, flat or grouped colors.",
  "descZh": "行内色板 + 弹窗网格选色，支持推荐色、扁平色板与分组色板。",
  "usage": "<tt-color-picker v-model=\"color\" />",
  "props": [
    ["v-model", "string", "''"],
    ["colors", "TtColorItem[]", "[] (12 default presets)"],
    ["groups", "TtColorPickerGroup[]", "[]"],
    ["recommended", "TtColorItem[]", "[]"],
    ["recommendedLabel", "string", "'推荐' / 'Recommended'"],
    ["previewCount", "number", "5"],
    ["size", "'sm' | 'md' | 'lg'", "'md'"],
    ["shape", "'circle' | 'square'", "'circle'"],
    ["showLabel", "boolean", "false"],
    ["popupTitle", "string", "'选择颜色'"],
    ["confirmText", "string", "'确定'"],
    ["cancelText", "string", "'取消'"],
    ["disabled", "boolean", "false"]
  ],
  "tag": "tt-color-picker",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "Bind a color string with v-model. The component renders inline preview swatches plus a 'more' trigger that opens a popup grid.",
      "descZh": "通过 v-model 绑定颜色字符串。行内显示预览色块，点击末尾的 +N 按钮展开弹窗网格。",
      "code": "<script setup>\nimport { ref } from 'vue'\nconst color = ref('')\n</script>\n\n<tt-color-picker v-model=\"color\" />"
    },
    {
      "title": "Recommended Colors",
      "titleZh": "推荐色",
      "desc": "Pin a curated set of brand / scenario colors at the top of the popup with an optional label.",
      "descZh": "在弹窗顶部置顶常用色（带可选标题），适合品牌色 / 业务场景色。",
      "code": "<script setup>\nconst recommended = [\n  { value: 'hsl(210, 60%, 88%)', label: '主科' },\n  { value: 'hsl(150, 50%, 85%)', label: '语言' },\n  { value: 'hsl(30, 60%, 85%)',  label: '艺术' },\n  { value: 'hsl(270, 40%, 85%)', label: '体育' },\n  { value: 'hsl(0, 50%, 88%)',   label: '兴趣' }\n]\n</script>\n\n<tt-color-picker\n  v-model=\"color\"\n  :recommended=\"recommended\"\n  recommended-label=\"常用配色\"\n  show-label\n/>"
    },
    {
      "title": "Grouped Palette",
      "titleZh": "分组色板",
      "desc": "Use `groups` for categorized palettes (e.g. brand / status / accent). Each group renders as its own labeled section in the popup.",
      "descZh": "使用 `groups` 实现分组色板（品牌 / 状态 / 强调色等）。每个分组在弹窗中独立成节，带标题。",
      "code": "<script setup>\nconst groups = [\n  { label: 'Brand',  colors: ['#0EA5E9', '#10B981', '#F59E0B'] },\n  { label: 'Status', colors: ['#22C55E', '#F97316', '#EF4444'] }\n]\n</script>\n\n<tt-color-picker v-model=\"color\" :groups=\"groups\" />"
    },
    {
      "title": "Shape & Size",
      "titleZh": "形状与尺寸",
      "desc": "`shape='square'` plus `size='lg'` produces a Notion-style large rounded swatch.",
      "descZh": "`shape='square'` 配合 `size='lg'` 可得到类 Notion 的大方形圆角色块。",
      "code": "<tt-color-picker v-model=\"color\" shape=\"square\" size=\"lg\" />"
    },
    {
      "title": "Disabled",
      "titleZh": "禁用",
      "desc": "Disable interaction while keeping the current selection visible.",
      "descZh": "禁用交互但保留当前选中色的显示。",
      "code": "<tt-color-picker v-model=\"color\" disabled />"
    }
  ]
}
