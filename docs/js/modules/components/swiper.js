window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["swiper"] = {
  "id": "swiper",
  "cat": "layout",
  "name": "Swiper",
  "desc": "Carousel/swiper with autoplay and indicator dots.",
  "descZh": "轮播组件，支持自动播放和指示点。",
  "usage": "<tt-swiper autoplay :interval=\"3000\" indicator-dots>\n  <swiper-item>Slide 1</swiper-item>\n</tt-swiper>",
  "props": [
    [
      "autoplay",
      "boolean",
      "false"
    ],
    [
      "interval",
      "number",
      "3000"
    ],
    [
      "circular",
      "boolean",
      "true"
    ],
    [
      "indicatorDots",
      "boolean",
      "true"
    ],
    [
      "current",
      "number",
      "0"
    ]
  ],
  "tag": "tt-swiper",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-swiper autoplay :interval=\"3000\" indicator-dots>\n  <swiper-item>Slide 1</swiper-item>\n</tt-swiper>"
    },
    {
      "title": "Composed Layout",
      "titleZh": "组合布局",
      "desc": "",
      "descZh": "",
      "code": "<tt-swiper>\n  <swiper-item><view>Card A</view></swiper-item>\n</tt-swiper>"
    }
  ]
}
