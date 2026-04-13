window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["icon"] = {
  "id": "icon",
  "cat": "basic",
  "name": "Icon",
  "desc": "SVG icon component powered by Remix Icon (https://remixicon.com). Icons are loaded from /static/svg/ as individual SVG files. Use full Remix Icon names: ri-{name}-line (outline) or ri-{name}-fill (filled). Supports custom size, color, and inline SVG.",
  "descZh": "基于 Remix Icon (https://remixicon.com) 的 SVG 图标组件。图标以独立 SVG 文件形式存放在 /static/svg/ 目录下。使用完整 Remix Icon 名称：ri-{name}-line（线框）或 ri-{name}-fill（填充）。支持自定义尺寸、颜色和内联 SVG。",
  "usage": "<tt-icon name=\"ri-home-line\" />\n<tt-icon name=\"ri-close-line\" :size=\"48\" color=\"red\" />",
  "props": [
    [
      "name",
      "string",
      "''"
    ],
    [
      "svg",
      "string",
      "''"
    ],
    [
      "size",
      "string|number",
      "48"
    ],
    [
      "color",
      "string",
      "''"
    ]
  ],
  "tag": "tt-icon",
  "examples": [
    {
      "title": "Icon Naming Convention",
      "titleZh": "图标命名规则",
      "desc": "Icons follow Remix Icon naming: ri-{name}-line for outline, ri-{name}-fill for filled variant. Browse all icons at https://remixicon.com",
      "descZh": "图标遵循 Remix Icon 命名规则：ri-{name}-line 为线框风格，ri-{name}-fill 为填充风格。浏览所有图标请访问 https://remixicon.com",
      "code": "<!-- Outline icons (line) -->\n<tt-icon name=\"ri-home-line\" />\n<tt-icon name=\"ri-search-line\" />\n<tt-icon name=\"ri-user-line\" />\n<tt-icon name=\"ri-settings-line\" />\n\n<!-- Filled icons (fill) -->\n<tt-icon name=\"ri-home-fill\" />\n<tt-icon name=\"ri-heart-fill\" />\n<tt-icon name=\"ri-star-fill\" />\n<tt-icon name=\"ri-notification-fill\" />"
    },
    {
      "title": "Size + Color",
      "titleZh": "尺寸与颜色",
      "desc": "Size is in rpx by default (number). Pass a string for other units (e.g. '24px'). Color accepts any CSS color value.",
      "descZh": "尺寸默认单位为 rpx（传数字），也可传入字符串指定其他单位（如 '24px'）。颜色接受任何 CSS 颜色值。",
      "code": "<!-- Different sizes -->\n<tt-icon name=\"ri-star-fill\" :size=\"32\" />\n<tt-icon name=\"ri-star-fill\" :size=\"48\" />\n<tt-icon name=\"ri-star-fill\" :size=\"64\" />\n\n<!-- Different colors -->\n<tt-icon name=\"ri-heart-fill\" :size=\"48\" color=\"#ef4444\" />\n<tt-icon name=\"ri-check-line\" :size=\"48\" color=\"#16a34a\" />\n<tt-icon name=\"ri-close-line\" :size=\"48\" color=\"#3b82f6\" />"
    },
    {
      "title": "Inline SVG",
      "titleZh": "内联 SVG",
      "desc": "Pass raw SVG string via the svg prop for custom icons not in Remix Icon.",
      "descZh": "通过 svg 属性传入原始 SVG 字符串，支持使用 Remix Icon 之外的自定义图标。",
      "code": "<tt-icon\n  :size=\"48\"\n  svg=\"<svg viewBox='0 0 24 24' fill='currentColor'><circle cx='12' cy='12' r='10'/></svg>\"\n/>"
    },
    {
      "title": "How It Works",
      "titleZh": "工作原理",
      "desc": "tt-icon loads SVG files from /static/svg/{name}.svg via fetch (H5) or file system (MP/App). SVGs are cached after first load. Use preloadSvgIcons() to pre-warm the cache.",
      "descZh": "tt-icon 从 /static/svg/{name}.svg 加载 SVG 文件，H5 端使用 fetch，小程序/App 端使用文件系统读取。SVG 加载后会缓存。可使用 preloadSvgIcons() 预热缓存。",
      "code": "// Pre-warm icon cache (optional, for performance)\nimport { preloadSvgIcons } from 'tt-ui/composables/use-svg-icon'\n\npreloadSvgIcons({\n  'ri-home-line': '<svg>...</svg>',\n  'ri-user-line': '<svg>...</svg>',\n})"
    },
    {
      "title": "Adding New Icons",
      "titleZh": "添加新图标",
      "desc": "Download SVG from https://remixicon.com, save to /static/svg/ with the ri-xxx-line.svg naming convention. The icon will be available immediately.",
      "descZh": "从 https://remixicon.com 下载 SVG 文件，保存到 /static/svg/ 目录，遵循 ri-xxx-line.svg 命名规则即可立即使用。",
      "code": "<!-- Steps to add a new icon:\n  1. Visit https://remixicon.com\n  2. Find the icon you need\n  3. Download SVG file\n  4. Save to /static/svg/ri-{name}-line.svg\n  5. Use in template: -->\n<tt-icon name=\"ri-{name}-line\" />"
    },
    {
      "title": "Available Icons",
      "titleZh": "可用图标列表",
      "desc": "Built-in line icons: home, search, user, settings, close, check, arrow-left-s, arrow-right-s, arrow-up-s, arrow-down-s, add, subtract, star, heart, edit, delete-bin, information, error-warning, checkbox-circle, close-circle, loader-4, refresh, share, link, file-copy, menu, more, filter, arrow-up-down, calendar, time, map-pin, phone, mail, camera, image, file, folder, lock, lock-unlock, eye, eye-off, notification, shopping-cart, price-tag, thumb-up, thumb-down. Fill icons: home, star, heart, notification, lock, eye, mail, calendar, folder, camera.",
      "descZh": "内置线框图标：home, search, user, settings, close, check, arrow-left-s, arrow-right-s, arrow-up-s, arrow-down-s, add, subtract, star, heart, edit, delete-bin, information, error-warning, checkbox-circle, close-circle, loader-4, refresh, share, link, file-copy, menu, more, filter, arrow-up-down, calendar, time, map-pin, phone, mail, camera, image, file, folder, lock, lock-unlock, eye, eye-off, notification, shopping-cart, price-tag, thumb-up, thumb-down。填充图标：home, star, heart, notification, lock, eye, mail, calendar, folder, camera。",
      "code": "<!-- Line (outline) icons -->\nri-home-line, ri-search-line, ri-user-line,\nri-settings-line, ri-close-line, ri-check-line,\nri-arrow-left-s-line, ri-arrow-right-s-line,\nri-arrow-up-s-line, ri-arrow-down-s-line,\nri-add-line, ri-subtract-line, ri-star-line,\nri-heart-line, ri-edit-line, ri-delete-bin-line,\nri-information-line, ri-error-warning-line,\nri-checkbox-circle-line, ri-close-circle-line,\nri-loader-4-line, ri-refresh-line, ri-share-line,\nri-link, ri-file-copy-line, ri-menu-line,\nri-more-line, ri-filter-line, ri-arrow-up-down-line,\nri-calendar-line, ri-time-line, ri-map-pin-line,\nri-phone-line, ri-mail-line, ri-camera-line,\nri-image-line, ri-file-line, ri-folder-line,\nri-lock-line, ri-lock-unlock-line, ri-eye-line,\nri-eye-off-line, ri-notification-line,\nri-shopping-cart-line, ri-price-tag-line,\nri-thumb-up-line, ri-thumb-down-line, ri-github-line\n\n<!-- Fill (solid) icons -->\nri-home-fill, ri-star-fill, ri-heart-fill,\nri-notification-fill, ri-lock-fill, ri-eye-fill,\nri-mail-fill, ri-calendar-fill, ri-folder-fill,\nri-camera-fill"
    }
  ]
}
