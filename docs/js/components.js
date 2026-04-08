export const allComponents = [
  { id:'button', cat:'basic', name:'Button',
    desc:'Primary interactive element with 6 variants, 4 sizes, loading/disabled states.',
    usage:`<tt-button variant="default">Click me</tt-button>
<tt-button variant="destructive">Delete</tt-button>
<tt-button variant="outline" size="sm">Small</tt-button>
<tt-button loading>Saving...</tt-button>`,
    props:[['variant',"'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'","'default'"],['size',"'sm'|'md'|'lg'|'icon'","'md'"],['disabled','boolean','false'],['loading','boolean','false'],['block','boolean','false']]
  },
  { id:'icon', cat:'basic', name:'Icon',
    desc:'Icon component with custom name, size, and color support.',
    usage:`<tt-icon name="home" />
<tt-icon name="close" size="24" color="red" />`,
    props:[['name','string','required'],['size','string|number','16'],['color','string',"''"]]
  },
  { id:'input', cat:'form', name:'Input',
    desc:'Text input with v-model, multiple types, clearable, prefix/suffix slots.',
    usage:`<tt-input v-model="value" placeholder="Enter text" />
<tt-input v-model="search" clearable />
<tt-input type="password" placeholder="Password" />`,
    props:[['v-model','string|number',"''"],['type',"'text'|'password'|'number'","'text'"],['placeholder','string',"''"],['disabled','boolean','false'],['clearable','boolean','false']]
  },
  { id:'textarea', cat:'form', name:'Textarea',
    desc:'Multi-line text input with auto-height and word count.',
    usage:`<tt-textarea v-model="text" placeholder="Enter..." />
<tt-textarea v-model="text" :maxlength="200" show-count />`,
    props:[['v-model','string',"''"],['placeholder','string',"''"],['maxlength','number','-1'],['disabled','boolean','false'],['showCount','boolean','false']]
  },
  { id:'checkbox', cat:'form', name:'Checkbox',
    desc:'Checkbox with label and v-model binding.',
    usage:`<tt-checkbox v-model="checked" label="Option A" />`,
    props:[['v-model','boolean','false'],['label','string',"''"],['disabled','boolean','false']]
  },
  { id:'radio', cat:'form', name:'Radio',
    desc:'Radio button with label.',
    usage:`<tt-radio v-model="selected" label="Choice A" />`,
    props:[['v-model','boolean','false'],['label','string',"''"],['disabled','boolean','false']]
  },
  { id:'switch', cat:'form', name:'Switch',
    desc:'Toggle switch with active color and size variants.',
    usage:`<tt-switch v-model="on" />
<tt-switch v-model="on" active-color="#22c55e" size="sm" />`,
    props:[['v-model','boolean','false'],['disabled','boolean','false'],['activeColor','string',"''"],['size',"'sm'|'md'","'md'"]]
  },
  { id:'search', cat:'form', name:'Search',
    desc:'Search input with icon and cancel button.',
    usage:`<tt-search v-model="keyword" placeholder="Search..." show-cancel />`,
    props:[['v-model','string',"''"],['placeholder','string',"'Search'"],['showCancel','boolean','false'],['disabled','boolean','false']]
  },
  { id:'numberbox', cat:'form', name:'NumberBox',
    desc:'Stepper with min/max/step controls.',
    usage:`<tt-number-box v-model="count" :min="0" :max="99" />`,
    props:[['v-model','number','0'],['min','number','0'],['max','number','99999'],['step','number','1'],['disabled','boolean','false']]
  },
  { id:'form', cat:'form', name:'Form',
    desc:'Form container with validation and label layout.',
    usage:`<tt-form :model="form" :rules="rules">
  <tt-form-item label="Name">
    <tt-input v-model="form.name" />
  </tt-form-item>
</tt-form>`,
    props:[['model','Object','{}'],['rules','Object','{}'],['labelWidth','string',"'80px'"]]
  },
  { id:'rate', cat:'form', name:'Rate',
    desc:'Star rating with custom count and readonly mode.',
    usage:`<tt-rate v-model="score" />
<tt-rate :model-value="3" readonly />`,
    props:[['v-model','number','0'],['count','number','5'],['disabled','boolean','false'],['readonly','boolean','false']]
  },
  { id:'card', cat:'display', name:'Card',
    desc:'Container with header, content, footer slots and shadow variants.',
    usage:`<tt-card title="Title" description="Desc">
  <text>Content</text>
</tt-card>`,
    props:[['title','string',"''"],['description','string',"''"],['shadow',"'always'|'hover'|'never'","'always'"]]
  },
  { id:'badge', cat:'display', name:'Badge',
    desc:'Badge with number, max cap, and dot mode.',
    usage:`<tt-badge :value="5"><tt-button>Messages</tt-button></tt-badge>`,
    props:[['value','string|number',"''"],['max','number','99'],['dot','boolean','false'],['hidden','boolean','false']]
  },
  { id:'tag', cat:'display', name:'Tag',
    desc:'Tag with type variants, closeable, and round mode.',
    usage:`<tt-tag type="primary">Primary</tt-tag>
<tt-tag type="success" closeable />`,
    props:[['type',"'default'|'primary'|'success'|'warning'|'danger'","'default'"],['closeable','boolean','false'],['round','boolean','false'],['size',"'sm'|'md'","'md'"]]
  },
  { id:'divider', cat:'display', name:'Divider',
    desc:'Horizontal or vertical divider with content slot.',
    usage:`<tt-divider />
<tt-divider content-position="left">Text</tt-divider>`,
    props:[['direction',"'horizontal'|'vertical'","'horizontal'"],['contentPosition',"'left'|'center'|'right'","'center'"]]
  },
  { id:'empty', cat:'display', name:'Empty',
    desc:'Empty state with description and action slot.',
    usage:`<tt-empty description="No data" />`,
    props:[['description','string',"'No data'"],['image','string',"''"]]
  },
  { id:'progress', cat:'display', name:'Progress',
    desc:'Linear progress bar with percentage text.',
    usage:`<tt-progress :percentage="75" />`,
    props:[['percentage','number','0'],['strokeWidth','number','8'],['color','string',"''"],['showText','boolean','true']]
  },
  { id:'skeleton', cat:'display', name:'Skeleton',
    desc:'Loading placeholder with avatar, title, and rows.',
    usage:`<tt-skeleton :loading="true" avatar :rows="3" />`,
    props:[['loading','boolean','true'],['rows','number','3'],['avatar','boolean','false'],['title','boolean','true'],['animate','boolean','true']]
  },
  { id:'avatar', cat:'display', name:'Avatar',
    desc:'User avatar with image, text fallback, and shape.',
    usage:`<tt-avatar src="url" />
<tt-avatar text="JD" shape="square" />`,
    props:[['src','string',"''"],['size','string|number','40'],['shape',"'circle'|'square'","'circle'"],['text','string',"''"]]
  },
  { id:'image', cat:'display', name:'Image',
    desc:'Enhanced image with lazy-load, mode, and radius.',
    usage:`<tt-image src="url" width="200px" radius="8px" />`,
    props:[['src','string',"''"],['mode','string',"'aspectFill'"],['width','string',"'100%'"],['height','string',"'auto'"],['radius','string',"'0'"],['lazyLoad','boolean','true']]
  },
  { id:'countdown', cat:'display', name:'CountDown',
    desc:'Countdown timer with custom format.',
    usage:`<tt-count-down :time="3600000" format="HH:mm:ss" />`,
    props:[['time','number','0'],['format','string',"'HH:mm:ss'"],['autoStart','boolean','true']]
  },
  { id:'cell', cat:'navigation', name:'Cell',
    desc:'List cell with title, value, label, and link arrow.',
    usage:`<tt-cell title="Setting" value="Enabled" is-link />`,
    props:[['title','string',"''"],['value','string',"''"],['label','string',"''"],['isLink','boolean','false'],['border','boolean','true']]
  },
  { id:'tabs', cat:'navigation', name:'Tabs',
    desc:'Tab navigation with active indicator and disabled state.',
    usage:`<tt-tabs v-model="active" :items="items" />`,
    props:[['v-model','string|number','0'],['items','Array<{label,value,disabled?}>','[]']]
  },
  { id:'navbar', cat:'navigation', name:'Navbar',
    desc:'Navigation bar with left/right slots and back arrow.',
    usage:`<tt-navbar title="Page" left-arrow />`,
    props:[['title','string',"''"],['leftText','string',"''"],['leftArrow','boolean','false'],['fixed','boolean','false'],['border','boolean','true']]
  },
  { id:'tabbar', cat:'navigation', name:'Tabbar',
    desc:'Bottom tab bar with fixed positioning.',
    usage:`<tt-tabbar v-model="active" />`,
    props:[['v-model','number','0'],['fixed','boolean','true'],['border','boolean','true']]
  },
  { id:'steps', cat:'navigation', name:'Steps',
    desc:'Step indicator with horizontal/vertical layout.',
    usage:`<tt-steps :active="1" />`,
    props:[['active','number','0'],['direction',"'horizontal'|'vertical'","'horizontal'"]]
  },
  { id:'popup', cat:'feedback', name:'Popup',
    desc:'Base popup layer with 5 positions and overlay.',
    usage:`<tt-popup v-model:show="visible" position="bottom" round>
  <view>Content</view>
</tt-popup>`,
    props:[['v-model:show','boolean','false'],['position',"'center'|'top'|'bottom'|'left'|'right'","'center'"],['overlay','boolean','true'],['closeable','boolean','false'],['round','boolean','false']]
  },
  { id:'dialog', cat:'feedback', name:'Dialog',
    desc:'Modal dialog for confirmations with confirm/cancel buttons.',
    usage:`<tt-dialog v-model:show="visible" title="Confirm" message="Sure?" />`,
    props:[['v-model:show','boolean','false'],['title','string',"''"],['message','string',"''"],['confirmText','string',"'Confirm'"],['cancelText','string',"'Cancel'"]]
  },
  { id:'toast', cat:'feedback', name:'Toast',
    desc:'Lightweight message popup with success/fail/loading types.',
    usage:`<tt-toast :show="visible" message="Done!" type="success" />`,
    props:[['show','boolean','false'],['message','string',"''"],['type',"'text'|'success'|'fail'|'loading'","'text'"],['duration','number','2000']]
  },
  { id:'actionsheet', cat:'feedback', name:'ActionSheet',
    desc:'Bottom action menu with cancel button.',
    usage:`<tt-action-sheet v-model:show="visible" :actions="actions" />`,
    props:[['v-model:show','boolean','false'],['title','string',"''"],['actions','Array<{name,disabled?,color?}>','[]'],['cancelText','string',"'Cancel'"]]
  },
  { id:'sheet', cat:'feedback', name:'Sheet',
    desc:'Bottom/right sheet with title and close.',
    usage:`<tt-sheet v-model:show="visible" title="Options">
  <text>Content</text>
</tt-sheet>`,
    props:[['v-model:show','boolean','false'],['position',"'bottom'|'right'","'bottom'"],['title','string',"''"]]
  },
  { id:'noticebar', cat:'feedback', name:'NoticeBar',
    desc:'Scrollable notification bar with close button.',
    usage:`<tt-notice-bar text="Notice!" closeable />`,
    props:[['text','string',"''"],['color','string',"''"],['background','string',"''"],['closeable','boolean','false']]
  },
  { id:'loading', cat:'feedback', name:'Loading',
    desc:'Loading spinner with text and vertical layout.',
    usage:`<tt-loading text="Loading..." />`,
    props:[['size','string|number','24'],['color','string',"''"],['text','string',"''"],['vertical','boolean','false']]
  },
  { id:'configprovider', cat:'layout', name:'ConfigProvider',
    desc:'Theme injection via CSS Variables. Supports nested diff-merge.',
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
    usage:`<tt-space direction="horizontal" :size="12">
  <tt-button>A</tt-button>
  <tt-button>B</tt-button>
</tt-space>`,
    props:[['direction',"'horizontal'|'vertical'","'horizontal'"],['size','string|number','8'],['wrap','boolean','false']]
  },
  { id:'safearea', cat:'layout', name:'SafeArea',
    desc:'Safe area padding for notched devices.',
    usage:`<tt-safe-area position="bottom" />`,
    props:[['position',"'top'|'bottom'","'bottom'"]]
  },
  { id:'collapse', cat:'layout', name:'Collapse',
    desc:'Accordion panels with expand/collapse.',
    usage:`<tt-collapse v-model="active" accordion>
  <tt-collapse-item>Content</tt-collapse-item>
</tt-collapse>`,
    props:[['v-model','Array','[]'],['accordion','boolean','false']]
  },
]
