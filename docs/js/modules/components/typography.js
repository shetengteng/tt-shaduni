window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["typography"] = {
  "id": "typography",
  "cat": "basic",
  "name": "Typography",
  "desc": "Text/Title/Link with ellipsis, bold, underline, and delete styles.",
  "descZh": "文本/标题/链接组件，支持省略号、加粗、下划线、删除线。",
  "usage": "<tt-typography type=\"title\" :level=\"2\">Heading</tt-typography>\n<tt-typography :ellipsis=\"2\">Long text...</tt-typography>\n<tt-typography type=\"link\" href=\"#\">Link</tt-typography>",
  "props": [
    [
      "type",
      "'text'|'title'|'link'",
      "'text'"
    ],
    [
      "level",
      "1|2|3|4|5",
      "3"
    ],
    [
      "ellipsis",
      "boolean|number",
      "false"
    ],
    [
      "bold",
      "boolean",
      "false"
    ],
    [
      "disabled",
      "boolean",
      "false"
    ]
  ],
  "tag": "tt-typography",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "",
      "descZh": "",
      "code": "<tt-typography type=\"title\" :level=\"2\">Heading</tt-typography>\n<tt-typography :ellipsis=\"2\">Long text...</tt-typography>\n<tt-typography type=\"link\" href=\"#\">Link</tt-typography>"
    },
    {
      "title": "Disabled State",
      "titleZh": "禁用状态",
      "desc": "",
      "descZh": "",
      "code": "<tt-typography disabled />"
    },
    {
      "title": "Hierarchy Styles",
      "titleZh": "文字层级样式",
      "desc": "",
      "descZh": "",
      "code": "<tt-space direction=\"vertical\" :size=\"8\">\n  <tt-typography type=\"title\" :level=\"3\">Release notes</tt-typography>\n  <tt-typography bold>Important notice for your team</tt-typography>\n  <tt-typography type=\"link\">View details</tt-typography>\n</tt-space>"
    }
  ]
}
