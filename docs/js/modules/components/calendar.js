window.TTDocs = window.TTDocs || {}
window.TTDocs.componentEntries = window.TTDocs.componentEntries || {}
window.TTDocs.componentEntries["calendar"] = {
  "id": "calendar",
  "cat": "form",
  "name": "Calendar",
  "desc": "Month-view calendar with date selection, year/month picker, locale, formatter, and min/max range.",
  "descZh": "月历视图，支持日期选择、年月快速切换、中英文、formatter 自定义单元格、最小/最大范围限制。",
  "usage": "<tt-calendar v-model=\"selectedDate\" locale=\"zh\" />\n<tt-calendar v-model=\"date\" :max-date=\"today\" :formatter=\"myFormatter\" />",
  "props": [
    ["v-model", "string", "''"],
    ["minDate", "string", "''"],
    ["maxDate", "string", "''"],
    ["firstDayOfWeek", "0 | 1", "0"],
    ["readonly", "boolean", "false"],
    ["locale", "'en' | 'zh'", "'en'"],
    ["formatter", "(day: CalendarDay) => void", "undefined"],
    ["showBottom", "boolean", "true"]
  ],
  "tag": "tt-calendar",
  "examples": [
    {
      "title": "Quick Start",
      "titleZh": "快速开始",
      "desc": "Basic usage with v-model binding.",
      "descZh": "通过 v-model 绑定选中日期。",
      "code": "<script setup>\nimport { ref } from 'vue'\nconst date = ref('2026-04-14')\n</script>\n\n<tt-calendar v-model=\"date\" />"
    },
    {
      "title": "Chinese Locale",
      "titleZh": "中文模式",
      "desc": "Set locale=\"zh\" for Chinese weekday and month display. Click the header title to switch between year/month picker.",
      "descZh": "设置 locale=\"zh\" 显示中文星期和月份。点击标题可切换年/月选择器。",
      "code": "<tt-calendar v-model=\"date\" locale=\"zh\" />"
    },
    {
      "title": "Disable Future Dates",
      "titleZh": "禁用未来日期",
      "desc": "Set max-date to today's date to prevent selecting future dates. Common in check-in / attendance scenarios.",
      "descZh": "将 maxDate 设为今天，禁止选择未来日期。适用于打卡、签到等场景。",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst date = ref('')\nconst today = new Date().toISOString().slice(0, 10)\n</script>\n\n<tt-calendar\n  v-model=\"date\"\n  locale=\"zh\"\n  :max-date=\"today\"\n/>"
    },
    {
      "title": "Date Range Limit",
      "titleZh": "日期范围限制",
      "desc": "Use minDate and maxDate to restrict selectable range.",
      "descZh": "同时设置 minDate 和 maxDate 限制可选范围。",
      "code": "<tt-calendar\n  v-model=\"date\"\n  min-date=\"2026-04-01\"\n  max-date=\"2026-04-30\"\n/>"
    },
    {
      "title": "Monday as First Day",
      "titleZh": "周一开头",
      "desc": "Set :first-day-of-week=\"1\" for Monday-first layout.",
      "descZh": "设置 firstDayOfWeek 为 1，以周一作为每周第一天。",
      "code": "<tt-calendar\n  v-model=\"date\"\n  locale=\"zh\"\n  :first-day-of-week=\"1\"\n/>"
    },
    {
      "title": "Formatter — Check-in Calendar",
      "titleZh": "Formatter — 打卡日历",
      "desc": "Use the formatter prop to customize day cells. Each day object has: date, dateStr, day, isToday, isSelected, disabled, style, bottom. Set style to add background colors, and bottom to show text below the date number.",
      "descZh": "通过 formatter 回调自定义每日单元格。day 对象包含：date（Date）、dateStr（YYYY-MM-DD）、day（日数字）、isToday、isSelected、disabled、style、bottom。设置 style 可添加背景色，设置 bottom 可在日期下方显示文字。",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst date = ref('')\nconst today = new Date().toISOString().slice(0, 10)\n\n// Simulated check-in data\nconst checkInData = {\n  '2026-04-01': { done: 3, total: 3 },\n  '2026-04-02': { done: 2, total: 3 },\n  '2026-04-03': { done: 0, total: 3 },\n}\n\nfunction formatter(day) {\n  const data = checkInData[day.dateStr]\n  if (!data) return\n  const { done, total } = data\n  if (done === total && total > 0) {\n    day.style = { backgroundColor: 'rgba(34,197,94,0.18)' }\n    day.bottom = `${done}/${total}`\n  } else if (done > 0) {\n    day.style = { backgroundColor: 'rgba(249,115,22,0.18)' }\n    day.bottom = `${done}/${total}`\n  }\n}\n</script>\n\n<tt-calendar\n  v-model=\"date\"\n  locale=\"zh\"\n  :max-date=\"today\"\n  :formatter=\"formatter\"\n/>"
    },
    {
      "title": "Events",
      "titleZh": "事件",
      "desc": "The component emits three events:\n• select(dateStr) — when a date is clicked\n• update:modelValue(dateStr) — for v-model binding\n• month-change(monthStr) — when navigating months (format: YYYY-MM)",
      "descZh": "组件触发三个事件：\n• select(dateStr) — 点击日期时触发，参数为 YYYY-MM-DD 字符串\n• update:modelValue(dateStr) — 用于 v-model 双向绑定\n• month-change(monthStr) — 切换月份时触发，参数为 YYYY-MM 字符串",
      "code": "<script setup>\nimport { ref } from 'vue'\n\nconst date = ref('')\n\nfunction onSelect(dateStr) {\n  console.log('Selected:', dateStr)\n}\n\nfunction onMonthChange(month) {\n  console.log('Month changed to:', month)\n  // Fetch data for the new month\n}\n</script>\n\n<tt-calendar\n  v-model=\"date\"\n  locale=\"zh\"\n  @select=\"onSelect\"\n  @month-change=\"onMonthChange\"\n/>"
    },
    {
      "title": "Year/Month Quick Picker",
      "titleZh": "年月快速选择",
      "desc": "Click the title text to open the month picker. Click again to open the year picker. Use arrows to navigate between year pages (12 years per page).",
      "descZh": "点击标题文字打开月份选择面板，再点击打开年份选择面板。使用左右箭头可翻页（每页 12 年）。",
      "code": "<!-- Click the title in the header to try it -->\n<tt-calendar v-model=\"date\" locale=\"zh\" />"
    },
    {
      "title": "CalendarDay Type Reference",
      "titleZh": "CalendarDay 类型参考",
      "desc": "The CalendarDay object passed to formatter and the day slot:",
      "descZh": "传入 formatter 回调和 day 插槽的 CalendarDay 对象结构：",
      "code": "interface CalendarDay {\n  date: Date          // JS Date object\n  dateStr: string     // 'YYYY-MM-DD'\n  day: number         // Day of month (1-31), 0 for padding cells\n  isToday: boolean    // Whether this is today\n  isSelected: boolean // Whether currently selected\n  disabled: boolean   // Whether disabled (out of range)\n  style?: Record<string, string>  // Custom inline styles\n  bottom?: string     // Text shown below date number\n}"
    },
    {
      "title": "Slot: day",
      "titleZh": "插槽：day",
      "desc": "Use the #day slot to fully customize the bottom area of each date cell. The slot receives the CalendarDay object as scoped data.",
      "descZh": "使用 #day 插槽完全自定义日期底部区域。插槽通过作用域接收 CalendarDay 对象。",
      "code": "<tt-calendar v-model=\"date\" locale=\"zh\">\n  <template #day=\"{ day }\">\n    <view v-if=\"day.isToday\" class=\"dot dot--today\" />\n    <text v-else-if=\"day.bottom\" class=\"custom-text\">\n      {{ day.bottom }}\n    </text>\n  </template>\n</tt-calendar>"
    }
  ]
}
