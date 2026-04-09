window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["configprovider"] = {
  "id": "configprovider",
  "cat": "layout",
  "name": "ConfigProvider",
  "desc": "Theme injection via CSS Variables. Supports nested diff-merge.",
  "descZh": "主题注入，通过 CSS 变量实现，支持嵌套差异合并。",
  "usage": "<tt-config-provider>\n  <tt-button>Themed</tt-button>\n</tt-config-provider>\n\n<tt-config-provider :theme-vars=\"{ primary: '#6366f1' }\">\n  <tt-button>Indigo</tt-button>\n</tt-config-provider>",
  "props": [
    [
      "theme",
      "'light'|'dark'",
      "'system'"
    ],
    [
      "themeVars",
      "Record<string,string>",
      "{}"
    ]
  ],
  "tag": "tt-config-provider",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-config-provider>\n  <tt-button>Themed</tt-button>\n</tt-config-provider>\n\n<tt-config-provider :theme-vars=\"{ primary: '#6366f1' }\">\n  <tt-button>Indigo</tt-button>\n</tt-config-provider>"
    },
    {
      "title": "Local Theme Scope",
      "titleZh": "局部主题作用域",
      "desc": "",
      "descZh": "",
      "code": "<tt-config-provider :theme-vars=\"{ primary: '#0f766e', radius: '18rpx' }\">\n  <tt-space>\n    <tt-button>Confirm</tt-button>\n    <tt-button variant=\"outline\">Draft</tt-button>\n  </tt-space>\n</tt-config-provider>"
    },
    {
      "title": "Dashboard Surface",
      "titleZh": "面板主题注入",
      "desc": "",
      "descZh": "",
      "code": "<tt-config-provider :theme-vars=\"{ muted: '#f1f5f9', border: '#cbd5e1' }\">\n  <tt-card title=\"Workspace status\">Synced 2 minutes ago</tt-card>\n</tt-config-provider>"
    }
  ]
}
