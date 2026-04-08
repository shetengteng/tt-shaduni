window.TTDocs = window.TTDocs || {}

window.TTDocs.allComponents = [
  { id:'button', cat:'basic', name:'Button',
    desc:'Primary interactive element with 6 variants, 4 sizes, loading/disabled states.',
    descZh:'主要交互元素，支持 6 种风格变体、4 种尺寸、加载/禁用状态。',
    usage:`<tt-button variant="default">Click me</tt-button>
<tt-button variant="destructive">Delete</tt-button>
<tt-button variant="outline" size="sm">Small</tt-button>
<tt-button loading>Saving...</tt-button>`,
    props:[['variant',"'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'","'default'"],['size',"'sm'|'md'|'lg'|'icon'","'md'"],['disabled','boolean','false'],['loading','boolean','false'],['block','boolean','false']]
  },
  { id:'icon', cat:'basic', name:'Icon',
    desc:'Icon component with custom name, size, and color support.',
    descZh:'图标组件，支持自定义名称、尺寸和颜色。',
    usage:`<tt-icon name="home" />
<tt-icon name="close" size="24" color="red" />`,
    props:[['name','string','required'],['size','string|number','16'],['color','string',"''"]]
  },
  { id:'typography', cat:'basic', name:'Typography',
    desc:'Text/Title/Link with ellipsis, bold, underline, and delete styles.',
    descZh:'文本/标题/链接组件，支持省略号、加粗、下划线、删除线。',
    usage:`<tt-typography type="title" :level="2">Heading</tt-typography>
<tt-typography :ellipsis="2">Long text...</tt-typography>
<tt-typography type="link" href="#">Link</tt-typography>`,
    props:[['type',"'text'|'title'|'link'","'text'"],['level','1|2|3|4|5','3'],['ellipsis','boolean|number','false'],['bold','boolean','false'],['disabled','boolean','false']]
  },
  { id:'input', cat:'form', name:'Input',
    desc:'Text input with v-model, multiple types, clearable, prefix/suffix slots.',
    descZh:'文本输入框，支持 v-model、多种类型、清除按钮、前缀/后缀插槽。',
    usage:`<tt-input v-model="value" placeholder="Enter text" />
<tt-input v-model="search" clearable />
<tt-input type="password" placeholder="Password" />`,
    props:[['v-model','string|number',"''"],['type',"'text'|'password'|'number'","'text'"],['placeholder','string',"''"],['disabled','boolean','false'],['clearable','boolean','false']]
  },
  { id:'textarea', cat:'form', name:'Textarea',
    desc:'Multi-line text input with auto-height and word count.',
    descZh:'多行文本输入，支持自动高度和字数统计。',
    usage:`<tt-textarea v-model="text" placeholder="Enter..." />
<tt-textarea v-model="text" :maxlength="200" show-count />`,
    props:[['v-model','string',"''"],['placeholder','string',"''"],['maxlength','number','-1'],['disabled','boolean','false'],['showCount','boolean','false']]
  },
  { id:'checkbox', cat:'form', name:'Checkbox',
    desc:'Checkbox with label and v-model binding.',
    descZh:'复选框，支持标签和 v-model 绑定。',
    usage:`<tt-checkbox v-model="checked" label="Option A" />`,
    props:[['v-model','boolean','false'],['label','string',"''"],['disabled','boolean','false']]
  },
  { id:'radio', cat:'form', name:'Radio',
    desc:'Radio button with label.',
    descZh:'单选按钮，支持标签和互斥选择。',
    usage:`<tt-radio v-model="selected" label="Choice A" />`,
    props:[['v-model','boolean','false'],['label','string',"''"],['disabled','boolean','false']]
  },
  { id:'switch', cat:'form', name:'Switch',
    desc:'Toggle switch with active color and size variants.',
    descZh:'开关切换，支持自定义激活颜色和尺寸。',
    usage:`<tt-switch v-model="on" />
<tt-switch v-model="on" active-color="#22c55e" size="sm" />`,
    props:[['v-model','boolean','false'],['disabled','boolean','false'],['activeColor','string',"''"],['size',"'sm'|'md'","'md'"]]
  },
  { id:'search', cat:'form', name:'Search',
    desc:'Search input with icon and cancel button.',
    descZh:'搜索输入框，带搜索图标和取消按钮。',
    usage:`<tt-search v-model="keyword" placeholder="Search..." show-cancel />`,
    props:[['v-model','string',"''"],['placeholder','string',"'Search'"],['showCancel','boolean','false'],['disabled','boolean','false']]
  },
  { id:'numberbox', cat:'form', name:'NumberBox',
    desc:'Stepper with min/max/step controls.',
    descZh:'步进器，支持最小值/最大值/步长控制。',
    usage:`<tt-number-box v-model="count" :min="0" :max="99" />`,
    props:[['v-model','number','0'],['min','number','0'],['max','number','99999'],['step','number','1'],['disabled','boolean','false']]
  },
  { id:'form', cat:'form', name:'Form',
    desc:'Form container with validation and label layout.',
    descZh:'表单容器，支持校验规则和标签布局。',
    usage:`<tt-form :model="form" :rules="rules">
  <tt-form-item label="Name">
    <tt-input v-model="form.name" />
  </tt-form-item>
</tt-form>`,
    props:[['model','Object','{}'],['rules','Object','{}'],['labelWidth','string',"'80px'"]]
  },
  { id:'rate', cat:'form', name:'Rate',
    desc:'Star rating with custom count and readonly mode.',
    descZh:'星级评分，支持自定义数量和只读模式。',
    usage:`<tt-rate v-model="score" />
<tt-rate :model-value="3" readonly />`,
    props:[['v-model','number','0'],['count','number','5'],['disabled','boolean','false'],['readonly','boolean','false']]
  },
  { id:'slider', cat:'form', name:'Slider',
    desc:'Single-thumb slider with min/max/step controls.',
    descZh:'单滑块滑动条，支持最小值/最大值/步长。',
    usage:`<tt-slider v-model="val" :min="0" :max="100" />`,
    props:[['v-model','number','0'],['min','number','0'],['max','number','100'],['step','number','1'],['disabled','boolean','false']]
  },
  { id:'picker', cat:'form', name:'Picker',
    desc:'Single/multi-column picker with confirm/cancel toolbar.',
    descZh:'单列/多列选择器，带确认/取消工具栏。',
    usage:`<tt-picker v-model:show="visible" :columns="cols" @confirm="onConfirm" />`,
    props:[['v-model:show','boolean','false'],['columns','Array','[]'],['title','string',"''"],['confirmText','string',"'Confirm'"],['cancelText','string',"'Cancel'"]]
  },
  { id:'datepicker', cat:'form', name:'DatePicker',
    desc:'Date picker with year-month-day columns.',
    descZh:'日期选择器，支持年-月-日列选择。',
    usage:`<tt-date-picker v-model="date" v-model:show="visible" title="Select Date" />`,
    props:[['v-model','string',"''"],['v-model:show','boolean','false'],['mode',"'date'|'time'|'datetime'","'date'"],['title','string',"''"]]
  },
  { id:'calendar', cat:'form', name:'Calendar',
    desc:'Month-view calendar with date selection, min/max range, and navigation.',
    descZh:'月历视图，支持日期选择、最小/最大范围限制和月份导航。',
    usage:`<tt-calendar v-model="selectedDate" />
<tt-calendar v-model="date" min-date="2025-01-01" max-date="2025-12-31" />
<tt-calendar v-model="date" :first-day-of-week="1" />`,
    props:[['v-model','string',"''"],['minDate','string',"''"],['maxDate','string',"''"],['firstDayOfWeek','0|1','0'],['readonly','boolean','false']]
  },
  { id:'upload', cat:'form', name:'Upload',
    desc:'Image/file uploader with preview, delete, and count limit.',
    descZh:'图片/文件上传，支持预览、删除和数量限制。',
    usage:`<tt-upload v-model:file-list="files" :max-count="9" />`,
    props:[['v-model:fileList','UploadFile[]','[]'],['maxCount','number','9'],['accept','string',"'image'"],['disabled','boolean','false'],['deletable','boolean','true']]
  },
  { id:'card', cat:'display', name:'Card',
    desc:'Container with header, content, footer slots and shadow variants.',
    descZh:'卡片容器，支持头部、内容、底部插槽和阴影变体。',
    usage:`<tt-card title="Title" description="Desc">
  <text>Content</text>
</tt-card>`,
    props:[['title','string',"''"],['description','string',"''"],['shadow',"'always'|'hover'|'never'","'always'"]]
  },
  { id:'badge', cat:'display', name:'Badge',
    desc:'Badge with number, max cap, and dot mode.',
    descZh:'徽标，支持数字、上限和红点模式。',
    usage:`<tt-badge :value="5"><tt-button>Messages</tt-button></tt-badge>`,
    props:[['value','string|number',"''"],['max','number','99'],['dot','boolean','false'],['hidden','boolean','false']]
  },
  { id:'tag', cat:'display', name:'Tag',
    desc:'Tag with type variants, closeable, and round mode.',
    descZh:'标签，支持类型变体、可关闭和圆角模式。',
    usage:`<tt-tag type="primary">Primary</tt-tag>
<tt-tag type="success" closeable />`,
    props:[['type',"'default'|'primary'|'success'|'warning'|'danger'","'default'"],['closeable','boolean','false'],['round','boolean','false'],['size',"'sm'|'md'","'md'"]]
  },
  { id:'divider', cat:'display', name:'Divider',
    desc:'Horizontal or vertical divider with content slot.',
    descZh:'水平或垂直分割线，支持内容插槽。',
    usage:`<tt-divider />
<tt-divider content-position="left">Text</tt-divider>`,
    props:[['direction',"'horizontal'|'vertical'","'horizontal'"],['contentPosition',"'left'|'center'|'right'","'center'"]]
  },
  { id:'empty', cat:'display', name:'Empty',
    desc:'Empty state with description and action slot.',
    descZh:'空状态占位，支持描述文字和操作插槽。',
    usage:`<tt-empty description="No data" />`,
    props:[['description','string',"'No data'"],['image','string',"''"]]
  },
  { id:'progress', cat:'display', name:'Progress',
    desc:'Linear progress bar with percentage text.',
    descZh:'线性进度条，支持百分比文字显示。',
    usage:`<tt-progress :percentage="75" />`,
    props:[['percentage','number','0'],['strokeWidth','number','8'],['color','string',"''"],['showText','boolean','true']]
  },
  { id:'skeleton', cat:'display', name:'Skeleton',
    desc:'Loading placeholder with avatar, title, and rows.',
    descZh:'骨架屏加载占位，支持头像、标题和行数。',
    usage:`<tt-skeleton :loading="true" avatar :rows="3" />`,
    props:[['loading','boolean','true'],['rows','number','3'],['avatar','boolean','false'],['title','boolean','true'],['animate','boolean','true']]
  },
  { id:'avatar', cat:'display', name:'Avatar',
    desc:'User avatar with image, text fallback, and shape.',
    descZh:'用户头像，支持图片、文字回退和形状切换。',
    usage:`<tt-avatar src="url" />
<tt-avatar text="JD" shape="square" />`,
    props:[['src','string',"''"],['size','string|number','40'],['shape',"'circle'|'square'","'circle'"],['text','string',"''"]]
  },
  { id:'image', cat:'display', name:'Image',
    desc:'Enhanced image with lazy-load, mode, and radius.',
    descZh:'增强图片组件，支持懒加载、显示模式和圆角。',
    usage:`<tt-image src="url" width="200px" radius="8px" />`,
    props:[['src','string',"''"],['mode','string',"'aspectFill'"],['width','string',"'100%'"],['height','string',"'auto'"],['radius','string',"'0'"],['lazyLoad','boolean','true']]
  },
  { id:'countdown', cat:'display', name:'CountDown',
    desc:'Countdown timer with custom format.',
    descZh:'倒计时组件，支持自定义格式。',
    usage:`<tt-count-down :time="3600000" format="HH:mm:ss" />`,
    props:[['time','number','0'],['format','string',"'HH:mm:ss'"],['autoStart','boolean','true']]
  },
  { id:'table', cat:'display', name:'Table',
    desc:'Simple table with bordered/striped modes and horizontal scroll.',
    descZh:'简单表格，支持边框/斑马纹和水平滚动。',
    usage:`<tt-table :columns="cols" :data="rows" bordered striped />`,
    props:[['columns','TableColumn[]','[]'],['data','Record[]','[]'],['bordered','boolean','true'],['striped','boolean','false']]
  },
  { id:'descriptions', cat:'display', name:'Descriptions',
    desc:'Key-value pairs in grid layout with title and bordered mode.',
    descZh:'描述列表，网格布局显示键值对，支持标题和边框。',
    usage:`<tt-descriptions title="Info" :items="items" :column="2" />`,
    props:[['title','string',"''"],['items','DescriptionItem[]','[]'],['column','number','2'],['bordered','boolean','false']]
  },
  { id:'list', cat:'display', name:'List',
    desc:'List with loading and finished states for infinite scroll.',
    descZh:'列表组件，支持加载中和完成状态的无限滚动。',
    usage:`<tt-list :loading="loading" :finished="finished" @load="onLoad">
  <view v-for="item in items">...</view>
</tt-list>`,
    props:[['loading','boolean','false'],['finished','boolean','false'],['loadingText','string',"'Loading...'"],['finishedText','string',"'No more data'"],['offset','number','300']]
  },
  { id:'tooltip', cat:'display', name:'Tooltip',
    desc:'Tooltip popup with 4 placement directions.',
    descZh:'工具提示弹出框，支持 4 个方向定位。',
    usage:`<tt-tooltip content="Tip text" placement="top">
  <tt-button>Hover me</tt-button>
</tt-tooltip>`,
    props:[['content','string',"''"],['placement',"'top'|'bottom'|'left'|'right'","'top'"],['show','boolean','false']]
  },
  { id:'cell', cat:'navigation', name:'Cell',
    desc:'List cell with title, value, label, and link arrow.',
    descZh:'单元格，支持标题、数值、标签和链接箭头。',
    usage:`<tt-cell title="Setting" value="Enabled" is-link />`,
    props:[['title','string',"''"],['value','string',"''"],['label','string',"''"],['isLink','boolean','false'],['border','boolean','true']]
  },
  { id:'tabs', cat:'navigation', name:'Tabs',
    desc:'Tab navigation with active indicator and disabled state.',
    descZh:'选项卡导航，支持激活指示器和禁用状态。',
    usage:`<tt-tabs v-model="active" :items="items" />`,
    props:[['v-model','string|number','0'],['items','Array<{label,value,disabled?}>','[]']]
  },
  { id:'navbar', cat:'navigation', name:'Navbar',
    desc:'Navigation bar with left/right slots and back arrow.',
    descZh:'导航栏，支持左右插槽和返回箭头。',
    usage:`<tt-navbar title="Page" left-arrow />`,
    props:[['title','string',"''"],['leftText','string',"''"],['leftArrow','boolean','false'],['fixed','boolean','false'],['border','boolean','true']]
  },
  { id:'tabbar', cat:'navigation', name:'Tabbar',
    desc:'Bottom tab bar with fixed positioning.',
    descZh:'底部标签栏，支持固定定位。',
    usage:`<tt-tabbar v-model="active" />`,
    props:[['v-model','number','0'],['fixed','boolean','true'],['border','boolean','true']]
  },
  { id:'steps', cat:'navigation', name:'Steps',
    desc:'Step indicator with horizontal/vertical layout.',
    descZh:'步骤指示器，支持水平/垂直布局。',
    usage:`<tt-steps :active="1" />`,
    props:[['active','number','0'],['direction',"'horizontal'|'vertical'","'horizontal'"]]
  },
  { id:'sidebar', cat:'navigation', name:'Sidebar',
    desc:'Category navigation with active indicator and badge.',
    descZh:'侧边栏分类导航，支持激活指示器和角标。',
    usage:`<tt-sidebar v-model="active" :items="items" />`,
    props:[['v-model','number','0'],['items','SidebarItem[]','[]']]
  },
  { id:'breadcrumb', cat:'navigation', name:'Breadcrumb',
    desc:'Hierarchy navigation breadcrumb trail.',
    descZh:'面包屑导航，显示层级路径。',
    usage:`<tt-breadcrumb :items="[{text:'Home',to:'/'},{text:'Page'}]" />`,
    props:[['items','BreadcrumbItem[]','[]'],['separator','string',"'/'"]]
  },
  { id:'pagination', cat:'navigation', name:'Pagination',
    desc:'Data pagination with number and simple modes.',
    descZh:'分页器，支持数字和简洁模式。',
    usage:`<tt-pagination v-model="page" :total-items="100" :items-per-page="10" />`,
    props:[['v-model','number','1'],['totalItems','number','0'],['itemsPerPage','number','10'],['mode',"'number'|'simple'","'number'"]]
  },
  { id:'indexbar', cat:'navigation', name:'IndexBar',
    desc:'Alphabetical index sidebar for quick navigation.',
    descZh:'字母索引栏，用于快速定位导航。',
    usage:`<tt-index-bar @select="onSelect">
  <view>Content</view>
</tt-index-bar>`,
    props:[['indexList','string[]','A-Z'],['activeIndex','string',"''"]]
  },
  { id:'dropdownmenu', cat:'navigation', name:'DropdownMenu',
    desc:'Dropdown filter/sort menu with option selection.',
    descZh:'下拉筛选/排序菜单，支持选项选择。',
    usage:`<tt-dropdown-menu v-model="val" :options="opts" title="Sort" />`,
    props:[['v-model','string|number',"''"],['options','DropdownOption[]','[]'],['title','string',"''"],['disabled','boolean','false']]
  },
  { id:'popup', cat:'feedback', name:'Popup',
    desc:'Base popup layer with 5 positions and overlay.',
    descZh:'基础弹出层，支持 5 个位置和遮罩层。',
    usage:`<tt-popup v-model:show="visible" position="bottom" round>
  <view>Content</view>
</tt-popup>`,
    props:[['v-model:show','boolean','false'],['position',"'center'|'top'|'bottom'|'left'|'right'","'center'"],['overlay','boolean','true'],['closeable','boolean','false'],['round','boolean','false']]
  },
  { id:'dialog', cat:'feedback', name:'Dialog',
    desc:'Modal dialog for confirmations with confirm/cancel buttons.',
    descZh:'模态对话框，支持确认/取消按钮。',
    usage:`<tt-dialog v-model:show="visible" title="Confirm" message="Sure?" />`,
    props:[['v-model:show','boolean','false'],['title','string',"''"],['message','string',"''"],['confirmText','string',"'Confirm'"],['cancelText','string',"'Cancel'"]]
  },
  { id:'toast', cat:'feedback', name:'Toast',
    desc:'Lightweight message popup with success/fail/loading types.',
    descZh:'轻量消息提示，支持成功/失败/加载类型。',
    usage:`<tt-toast :show="visible" message="Done!" type="success" />`,
    props:[['show','boolean','false'],['message','string',"''"],['type',"'text'|'success'|'fail'|'loading'","'text'"],['duration','number','2000']]
  },
  { id:'actionsheet', cat:'feedback', name:'ActionSheet',
    desc:'Bottom action menu with cancel button.',
    descZh:'底部操作面板，带取消按钮。',
    usage:`<tt-action-sheet v-model:show="visible" :actions="actions" />`,
    props:[['v-model:show','boolean','false'],['title','string',"''"],['actions','Array<{name,disabled?,color?}>','[]'],['cancelText','string',"'Cancel'"]]
  },
  { id:'sheet', cat:'feedback', name:'Sheet',
    desc:'Bottom/right sheet with title and close.',
    descZh:'底部/右侧面板，支持标题和关闭。',
    usage:`<tt-sheet v-model:show="visible" title="Options">
  <text>Content</text>
</tt-sheet>`,
    props:[['v-model:show','boolean','false'],['position',"'bottom'|'right'","'bottom'"],['title','string',"''"]]
  },
  { id:'noticebar', cat:'feedback', name:'NoticeBar',
    desc:'Scrollable notification bar with close button.',
    descZh:'通知栏，支持滚动和关闭按钮。',
    usage:`<tt-notice-bar text="Notice!" closeable />`,
    props:[['text','string',"''"],['color','string',"''"],['background','string',"''"],['closeable','boolean','false']]
  },
  { id:'loading', cat:'feedback', name:'Loading',
    desc:'Loading spinner with text and vertical layout.',
    descZh:'加载指示器，支持文字和垂直布局。',
    usage:`<tt-loading text="Loading..." />`,
    props:[['size','string|number','24'],['color','string',"''"],['text','string',"''"],['vertical','boolean','false']]
  },
  { id:'transition', cat:'feedback', name:'Transition',
    desc:'Enter/leave animations: fade, slide-up/down/left/right, zoom.',
    descZh:'进入/离开动画：淡入、上/下/左/右滑入、缩放。',
    usage:`<tt-transition :show="visible" name="fade">
  <view>Content</view>
</tt-transition>`,
    props:[['show','boolean','false'],['name',"'fade'|'slide-up'|'slide-down'|'zoom'","'fade'"],['duration','number','300']]
  },
  { id:'swipeaction', cat:'feedback', name:'SwipeAction',
    desc:'Left/right swipe to reveal action buttons.',
    descZh:'左右滑动显示操作按钮。',
    usage:`<tt-swipe-action>
  <tt-cell title="Swipe me" />
</tt-swipe-action>`,
    props:[['leftActions','SwipeActionButton[]','[]'],['rightActions','SwipeActionButton[]','[Delete]'],['disabled','boolean','false'],['autoClose','boolean','true']]
  },
  { id:'configprovider', cat:'layout', name:'ConfigProvider',
    desc:'Theme injection via CSS Variables. Supports nested diff-merge.',
    descZh:'主题注入，通过 CSS 变量实现，支持嵌套差异合并。',
    usage:`<tt-config-provider>
  <tt-button>Themed</tt-button>
</tt-config-provider>

<tt-config-provider :theme-vars="{ primary: '#6366f1' }">
  <tt-button>Indigo</tt-button>
</tt-config-provider>`,
    props:[['theme',"'light'|'dark'","'system'"],['themeVars','Record<string,string>','{}']]
  },
  { id:'space', cat:'layout', name:'Space',
    desc:'Spacing component for horizontal/vertical gaps.',
    descZh:'间距组件，用于水平/垂直间距控制。',
    usage:`<tt-space direction="horizontal" :size="12">
  <tt-button>A</tt-button>
  <tt-button>B</tt-button>
</tt-space>`,
    props:[['direction',"'horizontal'|'vertical'","'horizontal'"],['size','string|number','8'],['wrap','boolean','false']]
  },
  { id:'safearea', cat:'layout', name:'SafeArea',
    desc:'Safe area padding for notched devices.',
    descZh:'安全区域内边距，适配刘海屏设备。',
    usage:`<tt-safe-area position="bottom" />`,
    props:[['position',"'top'|'bottom'","'bottom'"]]
  },
  { id:'collapse', cat:'layout', name:'Collapse',
    desc:'Accordion panels with expand/collapse.',
    descZh:'手风琴折叠面板，支持展开/收起。',
    usage:`<tt-collapse v-model="active" accordion>
  <tt-collapse-item>Content</tt-collapse-item>
</tt-collapse>`,
    props:[['v-model','Array','[]'],['accordion','boolean','false']]
  },
  { id:'row', cat:'layout', name:'Row',
    desc:'Flex row container for 12-column grid layout.',
    descZh:'Flex 行容器，用于 12 列栅格布局。',
    usage:`<tt-row :gutter="16">
  <tt-col :span="12">Left</tt-col>
  <tt-col :span="12">Right</tt-col>
</tt-row>`,
    props:[['gutter','number','0'],['justify',"'start'|'end'|'center'|'space-around'|'space-between'","'start'"],['align',"'top'|'middle'|'bottom'","'top'"],['wrap','boolean','true']]
  },
  { id:'grid', cat:'layout', name:'Grid',
    desc:'Grid layout with configurable columns and optional border.',
    descZh:'宫格布局，可配置列数和可选边框。',
    usage:`<tt-grid :column-num="4" border>
  <view>Item 1</view>
</tt-grid>`,
    props:[['columnNum','number','4'],['border','boolean','true'],['square','boolean','false'],['gutter','number','0']]
  },
  { id:'scrollview', cat:'layout', name:'ScrollView',
    desc:'Enhanced scroll-view with pull-refresh and infinite scroll.',
    descZh:'增强滚动视图，支持下拉刷新和无限滚动。',
    usage:`<tt-scroll-view refresher-enabled @refresh="onRefresh" @scrolltolower="onLoad">
  <view>Content</view>
</tt-scroll-view>`,
    props:[['scrollX','boolean','false'],['scrollY','boolean','true'],['refresherEnabled','boolean','false'],['refresherTriggered','boolean','false'],['lowerThreshold','number','50']]
  },
  { id:'swiper', cat:'layout', name:'Swiper',
    desc:'Carousel/swiper with autoplay and indicator dots.',
    descZh:'轮播组件，支持自动播放和指示点。',
    usage:`<tt-swiper autoplay :interval="3000" indicator-dots>
  <swiper-item>Slide 1</swiper-item>
</tt-swiper>`,
    props:[['autoplay','boolean','false'],['interval','number','3000'],['circular','boolean','true'],['indicatorDots','boolean','true'],['current','number','0']]
  },
  { id:'sticky', cat:'layout', name:'Sticky',
    desc:'Sticky positioning component with offset-top.',
    descZh:'吸顶组件，支持偏移量设置。',
    usage:`<tt-sticky :offset-top="56">
  <view>Sticks to top</view>
</tt-sticky>`,
    props:[['offsetTop','number','0'],['zIndex','number','99'],['disabled','boolean','false']]
  },
]
