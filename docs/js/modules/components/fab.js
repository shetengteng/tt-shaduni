window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["fab"] = {
  "id": "fab",
  "cat": "feedback",
  "name": "FAB",
  "desc": "Floating Action Button — circle or square, with optional speed-dial, badges and extended text.",
  "descZh": "悬浮操作按钮——圆形或方形，可挂载速拨子项、徽标，并支持带文字的扩展形态。",
  "usage": "<tt-fab icon=\"ri-add-line\" @click=\"onAdd\" />",
  "props": [
    [
      "icon",
      "string",
      "'ri-add-line'"
    ],
    [
      "text",
      "string",
      "''"
    ],
    [
      "type",
      "'primary' | 'default' | 'success' | 'warning' | 'danger'",
      "'primary'"
    ],
    [
      "shape",
      "'circle' | 'square'",
      "'square'"
    ],
    [
      "radius",
      "string",
      "'32rpx'"
    ],
    [
      "size",
      "'mini' | 'regular' | 'large'",
      "'regular'"
    ],
    [
      "position",
      "'bottom-right' | 'bottom-center' | 'bottom-left' | 'top-right' | 'custom'",
      "'bottom-right'"
    ],
    [
      "offsetTop / offsetLeft / offsetRight / offsetBottom",
      "string",
      "''"
    ],
    [
      "zIndex",
      "number",
      "100"
    ],
    [
      "shadow",
      "boolean",
      "true"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ],
    [
      "items",
      "Array<TtFabItem>",
      "[]"
    ],
    [
      "direction",
      "'up' | 'down' | 'left' | 'right'",
      "'up'"
    ],
    [
      "gap",
      "string",
      "'16rpx'"
    ],
    [
      "autoClose",
      "boolean",
      "true"
    ],
    [
      "v-model",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-fab",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-fab icon=\"ri-add-line\" @click=\"onAdd\" />"
    },
    {
      "title": "Extended FAB With Text",
      "titleZh": "带文字的扩展形态",
      "desc": "",
      "descZh": "",
      "code": "<tt-fab icon=\"ri-edit-line\" text=\"Compose\" position=\"bottom-center\" />"
    },
    {
      "title": "Speed Dial With Badges",
      "titleZh": "速拨子项与徽标",
      "desc": "",
      "descZh": "",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst open = ref(false)\nconst items = [\n  { key: 'photo', icon: 'ri-image-line', text: 'Photo', type: 'primary', badge: 'NEW' },\n  { key: 'audio', icon: 'ri-mic-line', text: 'Audio' },\n  { key: 'video', icon: 'ri-vidicon-line', text: 'Video', disabled: true },\n]\n</script>\n\n<tt-fab\n  v-model=\"open\"\n  icon=\"ri-more-2-fill\"\n  :items=\"items\"\n  @select=\"onSelect\"\n/>"
    },
    {
      "title": "Custom Position",
      "titleZh": "自定义位置",
      "desc": "Use `position=\"custom\"` together with `offset-*` props to anchor anywhere.",
      "descZh": "使用 `position=\"custom\"` 加 `offset-*` props 可锚定到任意位置。",
      "code": "<tt-fab\n  icon=\"ri-arrow-up-line\"\n  position=\"custom\"\n  offset-top=\"100rpx\"\n  offset-left=\"50rpx\"\n/>"
    }
  ]
}
