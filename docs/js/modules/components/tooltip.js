window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["tooltip"] = {
  "id": "tooltip",
  "cat": "feedback",
  "name": "Tooltip",
  "desc": "Lightweight click-triggered popover with viewport boundary detection (auto flip + clamp). Hosts plain text or rich content (menus, custom UI) in 4 placement directions.",
  "descZh": "轻量级点击触发的浮层，自带视窗边界检测（自动翻转 + 钳位）。支持纯文本提示或富内容（菜单、自定义 UI），4 个方向定位。",
  "usage": "<tt-tooltip content=\"Tip text\" placement=\"top\">\n  <tt-button>Click me</tt-button>\n</tt-tooltip>",
  "props": [
    ["content", "string", "''"],
    ["placement", "'top' | 'bottom' | 'left' | 'right'", "'top'"],
    ["align", "'start' | 'center' | 'end'", "'center'"],
    ["show", "boolean", "false"],
    ["trigger", "'click' | 'manual'", "'click'"],
    ["closeOnClickOutside", "boolean", "true"],
    ["arrow", "boolean", "true"],
    ["variant", "'dark' | 'light'", "'dark'"],
    ["offset", "number (px)", "12"],
    ["boundary", "number (px)", "8"],
    ["disableFlip", "boolean", "false"]
  ],
  "events": [
    ["update:show", "(value: boolean) => void"]
  ],
  "slots": [
    ["default", "Trigger element (typically a button or icon)"],
    ["content", "Rich content for the popup body. Overrides `content` prop when provided."]
  ],
  "exposed": [
    ["reposition", "() => Promise<void> — manually re-measure & place (e.g. after content change)"],
    ["hide", "() => void — programmatically close"]
  ],
  "tag": "tt-tooltip",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-tooltip content=\"Tip text\" placement=\"top\">\n  <tt-button>Click me</tt-button>\n</tt-tooltip>"
    },
    {
      "title": "Light variant",
      "titleZh": "浅色样式",
      "desc": "",
      "descZh": "",
      "code": "<tt-tooltip content=\"Light variant\" variant=\"light\">\n  <tt-button variant=\"outline\">Click me</tt-button>\n</tt-tooltip>"
    },
    {
      "title": "Rich content menu",
      "titleZh": "富内容菜单",
      "desc": "Use the `content` slot to embed custom UI such as a menu or form.",
      "descZh": "使用 content 插槽嵌入自定义 UI（菜单、表单等）。",
      "code": "<tt-tooltip placement=\"bottom\" variant=\"light\">\n  <tt-button>Open menu</tt-button>\n  <template #content>\n    <view class=\"my-menu\">\n      <view class=\"my-menu-item\">Day view</view>\n      <view class=\"my-menu-item\">Week view</view>\n    </view>\n  </template>\n</tt-tooltip>"
    },
    {
      "title": "Edge-aligned trigger (align=start)",
      "titleZh": "贴边触发（align=start）",
      "desc": "When the trigger is near the viewport edge, set align='start' (or 'end') so the popup hugs the trigger edge instead of being center-aligned. Combined with built-in boundary clamp, the popup never overflows.",
      "descZh": "当触发器位于屏幕边缘时，设 align='start'（或 'end'）让浮层从触发器同侧边缘展开；配合内置 boundary 钳位，浮层永远不会越界。",
      "code": "<tt-tooltip\n  placement=\"bottom\"\n  align=\"start\"\n  variant=\"light\"\n>\n  <view class=\"left-edge-icon\">\n    <tt-icon name=\"ri-calendar-line\" :size=\"32\" />\n  </view>\n  <template #content>\n    <view class=\"menu\">\n      <view class=\"menu-item\">Day view</view>\n      <view class=\"menu-item\">Week view</view>\n    </view>\n  </template>\n</tt-tooltip>"
    },
    {
      "title": "Manual control via v-model",
      "titleZh": "手动控制 v-model",
      "desc": "Use `trigger=\"manual\"` to control visibility from outside.",
      "descZh": "使用 trigger=\"manual\" 完全外部控制显隐。",
      "code": "<tt-tooltip\n  v-model:show=\"showTip\"\n  trigger=\"manual\"\n  content=\"Saved!\"\n>\n  <tt-button @click=\"showTip = !showTip\">Toggle</tt-button>\n</tt-tooltip>"
    },
    {
      "title": "Disable auto-flip",
      "titleZh": "禁用自动翻转",
      "desc": "By default the tooltip flips to the opposite side if the requested placement would overflow. Set `disableFlip` to keep the original placement (will still be clamped within the viewport).",
      "descZh": "默认情况下，当请求的方向会越界时，tooltip 会翻转到对侧。设 disableFlip 可保持原方向（仍会钳位在视窗内）。",
      "code": "<tt-tooltip content=\"Strict top\" placement=\"top\" disable-flip>\n  <tt-button>Top only</tt-button>\n</tt-tooltip>"
    }
  ]
}
