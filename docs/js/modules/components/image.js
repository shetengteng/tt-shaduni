window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["image"] = {
  "id": "image",
  "cat": "display",
  "name": "Image",
  "desc": "Enhanced image with lazy-load, mode, and radius.",
  "descZh": "增强图片组件，支持懒加载、显示模式和圆角。",
  "usage": "<tt-image src=\"url\" width=\"200px\" radius=\"8px\" />",
  "props": [
    [
      "src",
      "string",
      "''"
    ],
    [
      "mode",
      "string",
      "'aspectFill'"
    ],
    [
      "width",
      "string",
      "'100%'"
    ],
    [
      "height",
      "string",
      "'auto'"
    ],
    [
      "radius",
      "string",
      "'0'"
    ],
    [
      "lazyLoad",
      "boolean",
      "true"
    ]
  ],
  "tag": "tt-image",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-image src=\"url\" width=\"200px\" radius=\"8px\" />"
    },
    {
      "title": "Gallery Cards",
      "titleZh": "图像卡片",
      "desc": "",
      "descZh": "",
      "code": "<tt-space direction=\"vertical\" :size=\"12\">\n  <tt-image src=\"https://dummyimage.com/640x360/171717/ffffff&text=Cover\" height=\"180px\" radius=\"16px\" />\n  <tt-image src=\"https://dummyimage.com/640x240/e5e5e5/171717&text=Banner\" height=\"120px\" radius=\"12px\" />\n</tt-space>"
    }
  ]
}
