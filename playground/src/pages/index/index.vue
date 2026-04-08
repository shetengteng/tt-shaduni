<template>
  <tt-config-provider>
    <view class="page">
      <view class="header">
        <text class="header-title">TT ShadUni</text>
        <view class="header-right">
          <view class="theme-toggle" @click="toggleTheme">
            <text v-if="isDark" class="toggle-icon">&#x2600;</text>
            <text v-else class="toggle-icon">&#x263E;</text>
          </view>
        </view>
      </view>

      <tt-tabs v-model="activeTab" :items="tabs" />

      <!-- Button -->
      <view v-if="activeTab === 'button'" class="demo-section">
        <tt-card title="Variants">
          <view class="demo-row">
            <tt-button variant="default">Default</tt-button>
            <tt-button variant="secondary">Secondary</tt-button>
            <tt-button variant="destructive">Delete</tt-button>
          </view>
          <view class="demo-row">
            <tt-button variant="outline">Outline</tt-button>
            <tt-button variant="ghost">Ghost</tt-button>
            <tt-button variant="link">Link</tt-button>
          </view>
        </tt-card>
        <tt-card title="Sizes">
          <view class="demo-row">
            <tt-button size="sm">Small</tt-button>
            <tt-button size="md">Medium</tt-button>
            <tt-button size="lg">Large</tt-button>
          </view>
        </tt-card>
        <tt-card title="States">
          <view class="demo-row">
            <tt-button disabled>Disabled</tt-button>
            <tt-button loading>Loading</tt-button>
          </view>
          <tt-button block>Block Button</tt-button>
        </tt-card>
      </view>

      <!-- Input -->
      <view v-if="activeTab === 'input'" class="demo-section">
        <tt-card title="Basic"><tt-input v-model="inputVal" placeholder="Type something..." /></tt-card>
        <tt-card title="Clearable"><tt-input v-model="inputVal2" placeholder="Clearable" clearable /></tt-card>
        <tt-card title="Password"><tt-input v-model="passwordVal" type="password" placeholder="Password" /></tt-card>
        <tt-card title="Disabled"><tt-input model-value="Disabled" disabled /></tt-card>
      </view>

      <!-- Textarea -->
      <view v-if="activeTab === 'textarea'" class="demo-section">
        <tt-card title="Basic"><tt-textarea v-model="textareaVal" placeholder="Enter text..." /></tt-card>
        <tt-card title="With Count"><tt-textarea v-model="textareaVal" :maxlength="200" show-count /></tt-card>
      </view>

      <!-- Checkbox & Radio -->
      <view v-if="activeTab === 'check'" class="demo-section">
        <tt-card title="Checkbox">
          <tt-checkbox v-model="check1" label="Option A" />
          <tt-checkbox v-model="check2" label="Option B" />
          <tt-checkbox :model-value="false" label="Disabled" disabled />
        </tt-card>
        <tt-card title="Radio">
          <tt-radio v-model="radio1" label="Choice A" />
          <tt-radio v-model="radio2" label="Choice B" />
          <tt-radio :model-value="false" label="Disabled" disabled />
        </tt-card>
      </view>

      <!-- Switch -->
      <view v-if="activeTab === 'switch'" class="demo-section">
        <tt-card title="Switch">
          <view class="demo-row">
            <tt-switch v-model="switchOn" />
            <text class="demo-text">{{ switchOn ? 'ON' : 'OFF' }}</text>
          </view>
          <view class="demo-row">
            <tt-switch v-model="switchOn2" size="sm" />
            <text class="demo-text">Small</text>
          </view>
          <view class="demo-row">
            <tt-switch :model-value="false" disabled />
            <text class="demo-text">Disabled</text>
          </view>
        </tt-card>
      </view>

      <!-- Search -->
      <view v-if="activeTab === 'search'" class="demo-section">
        <tt-card title="Search">
          <tt-search v-model="searchVal" placeholder="Search..." show-cancel @cancel="searchVal = ''" />
        </tt-card>
      </view>

      <!-- NumberBox -->
      <view v-if="activeTab === 'numbox'" class="demo-section">
        <tt-card title="NumberBox">
          <view class="demo-row">
            <tt-number-box v-model="numVal" :min="0" :max="20" />
            <text class="demo-text">Value: {{ numVal }}</text>
          </view>
          <view class="demo-row">
            <tt-number-box :model-value="5" :step="5" />
            <text class="demo-text">Step: 5</text>
          </view>
        </tt-card>
      </view>

      <!-- Form -->
      <view v-if="activeTab === 'form'" class="demo-section">
        <tt-card title="Form">
          <tt-form>
            <view class="form-item">
              <text class="form-label">Name</text>
              <tt-input v-model="formName" placeholder="Your name" />
            </view>
            <view class="form-item">
              <text class="form-label">Email</text>
              <tt-input v-model="formEmail" placeholder="Email address" />
            </view>
            <tt-button block>Submit</tt-button>
          </tt-form>
        </tt-card>
      </view>

      <!-- Card -->
      <view v-if="activeTab === 'card'" class="demo-section">
        <tt-card title="Basic Card" description="Card with description">
          <text class="demo-text">Card content goes here.</text>
        </tt-card>
        <tt-card title="With Footer">
          <text class="demo-text">Content</text>
          <template #footer>
            <tt-button variant="outline" size="sm">Cancel</tt-button>
            <tt-button size="sm">Save</tt-button>
          </template>
        </tt-card>
      </view>

      <!-- Badge -->
      <view v-if="activeTab === 'badge'" class="demo-section">
        <tt-card title="Badge">
          <view class="demo-row">
            <tt-badge :value="5"><tt-button variant="outline">Messages</tt-button></tt-badge>
            <tt-badge :value="120" :max="99"><tt-button variant="outline">Notify</tt-button></tt-badge>
            <tt-badge dot><tt-button variant="outline">Dot</tt-button></tt-badge>
          </view>
        </tt-card>
      </view>

      <!-- Tag -->
      <view v-if="activeTab === 'tag'" class="demo-section">
        <tt-card title="Tag Types">
          <view class="demo-row">
            <tt-tag>Default</tt-tag>
            <tt-tag type="primary">Primary</tt-tag>
            <tt-tag type="success">Success</tt-tag>
            <tt-tag type="warning">Warning</tt-tag>
            <tt-tag type="danger">Danger</tt-tag>
          </view>
        </tt-card>
        <tt-card title="Closeable & Round">
          <view class="demo-row">
            <tt-tag type="primary" closeable>Closeable</tt-tag>
            <tt-tag type="success" round>Round</tt-tag>
            <tt-tag size="sm">Small</tt-tag>
          </view>
        </tt-card>
      </view>

      <!-- Divider -->
      <view v-if="activeTab === 'divider'" class="demo-section">
        <tt-card title="Divider">
          <text class="demo-text">Content above</text>
          <tt-divider />
          <text class="demo-text">Content below</text>
          <tt-divider content-position="left">Left</tt-divider>
          <tt-divider>Center</tt-divider>
          <tt-divider content-position="right">Right</tt-divider>
        </tt-card>
      </view>

      <!-- Empty -->
      <view v-if="activeTab === 'empty'" class="demo-section">
        <tt-card title="Empty State">
          <tt-empty description="No data found" />
        </tt-card>
      </view>

      <!-- Progress -->
      <view v-if="activeTab === 'progress'" class="demo-section">
        <tt-card title="Progress">
          <tt-progress :percentage="30" />
          <view style="height: 12px;" />
          <tt-progress :percentage="75" />
          <view style="height: 12px;" />
          <tt-progress :percentage="100" />
        </tt-card>
      </view>

      <!-- Skeleton -->
      <view v-if="activeTab === 'skeleton'" class="demo-section">
        <tt-card title="Skeleton Loading">
          <tt-skeleton :loading="true" avatar :rows="3" />
        </tt-card>
        <tt-card title="Loaded">
          <tt-skeleton :loading="false">
            <text class="demo-text">Content loaded successfully!</text>
          </tt-skeleton>
        </tt-card>
      </view>

      <!-- Avatar -->
      <view v-if="activeTab === 'avatar'" class="demo-section">
        <tt-card title="Avatar">
          <view class="demo-row">
            <tt-avatar text="JD" />
            <tt-avatar text="AB" shape="square" />
            <tt-avatar text="S" :size="28" />
          </view>
        </tt-card>
      </view>

      <!-- Rate -->
      <view v-if="activeTab === 'rate'" class="demo-section">
        <tt-card title="Rate">
          <tt-rate v-model="rateVal" />
          <text class="demo-text">Score: {{ rateVal }}</text>
        </tt-card>
        <tt-card title="Readonly">
          <tt-rate :model-value="4" readonly />
        </tt-card>
      </view>

      <!-- CountDown -->
      <view v-if="activeTab === 'countdown'" class="demo-section">
        <tt-card title="CountDown">
          <tt-count-down :time="86400000" />
        </tt-card>
      </view>

      <!-- Image -->
      <view v-if="activeTab === 'image'" class="demo-section">
        <tt-card title="Image">
          <tt-image width="120px" height="80px" radius="8px" />
        </tt-card>
      </view>

      <!-- Cell -->
      <view v-if="activeTab === 'cell'" class="demo-section">
        <tt-card title="Cell List">
          <tt-cell title="Language" value="English" is-link />
          <tt-cell title="Theme" value="System" is-link />
          <tt-cell title="About" is-link :border="false" />
        </tt-card>
      </view>

      <!-- Tabs Demo -->
      <view v-if="activeTab === 'tabs'" class="demo-section">
        <tt-card title="Tabs">
          <tt-tabs v-model="demoTab" :items="demoTabs" />
          <text class="demo-text">Active: {{ demoTab }}</text>
        </tt-card>
      </view>

      <!-- Navbar -->
      <view v-if="activeTab === 'navbar'" class="demo-section">
        <tt-card title="Navbar">
          <tt-navbar title="Page Title" left-arrow left-text="Back" />
          <view style="height: 8px;" />
          <tt-navbar title="No Border" :border="false">
            <template #right><text class="nav-action">Save</text></template>
          </tt-navbar>
        </tt-card>
      </view>

      <!-- Tabbar -->
      <view v-if="activeTab === 'tabbar'" class="demo-section">
        <tt-card title="Tabbar">
          <tt-tabbar v-model="tabbarVal" :fixed="false" />
        </tt-card>
      </view>

      <!-- Steps -->
      <view v-if="activeTab === 'steps'" class="demo-section">
        <tt-card title="Steps">
          <tt-steps :active="1" />
        </tt-card>
      </view>

      <!-- Loading -->
      <view v-if="activeTab === 'loading'" class="demo-section">
        <tt-card title="Loading">
          <view class="demo-row">
            <tt-loading />
            <tt-loading text="Loading..." />
          </view>
          <tt-loading text="Vertical" vertical />
        </tt-card>
      </view>

      <!-- Toast -->
      <view v-if="activeTab === 'toast'" class="demo-section">
        <tt-card title="Toast">
          <view class="demo-row">
            <tt-button size="sm" @click="showToast = true">Show Toast</tt-button>
            <tt-button size="sm" variant="outline" @click="showSuccessToast = true">Success</tt-button>
          </view>
        </tt-card>
        <tt-toast :show="showToast" message="This is a toast" @update:show="showToast = $event" />
        <tt-toast :show="showSuccessToast" type="success" message="Success!" @update:show="showSuccessToast = $event" />
      </view>

      <!-- Dialog -->
      <view v-if="activeTab === 'dialog'" class="demo-section">
        <tt-card title="Dialog">
          <view class="demo-row">
            <tt-button @click="showDialog = true">Confirm Dialog</tt-button>
            <tt-button variant="outline" @click="showAlert = true">Alert</tt-button>
          </view>
        </tt-card>
        <tt-dialog v-model:show="showDialog" title="Confirm" message="Proceed?" />
        <tt-dialog v-model:show="showAlert" title="Notice" message="Alert message" :show-cancel-button="false" confirm-text="OK" />
      </view>

      <!-- Popup -->
      <view v-if="activeTab === 'popup'" class="demo-section">
        <tt-card title="Popup Positions">
          <view class="demo-row">
            <tt-button size="sm" variant="outline" @click="popupPos='center';showPopup=true">Center</tt-button>
            <tt-button size="sm" variant="outline" @click="popupPos='bottom';showPopup=true">Bottom</tt-button>
            <tt-button size="sm" variant="outline" @click="popupPos='top';showPopup=true">Top</tt-button>
          </view>
        </tt-card>
        <tt-popup v-model:show="showPopup" :position="popupPos" closeable round>
          <view class="popup-content"><text class="demo-text">{{ popupPos }}</text></view>
        </tt-popup>
      </view>

      <!-- ActionSheet -->
      <view v-if="activeTab === 'action'" class="demo-section">
        <tt-card title="ActionSheet">
          <tt-button @click="showAS = true">Show ActionSheet</tt-button>
        </tt-card>
        <tt-action-sheet v-model:show="showAS" :actions="asActions" />
      </view>

      <!-- Sheet -->
      <view v-if="activeTab === 'sheet'" class="demo-section">
        <tt-card title="Sheet">
          <tt-button @click="showSheet = true">Open Sheet</tt-button>
        </tt-card>
        <tt-sheet v-model:show="showSheet" title="Sheet Title">
          <text class="demo-text">Sheet content area</text>
        </tt-sheet>
      </view>

      <!-- NoticeBar -->
      <view v-if="activeTab === 'notice'" class="demo-section">
        <tt-card title="NoticeBar">
          <tt-notice-bar text="This is a notice bar notification message." closeable />
        </tt-card>
      </view>

      <!-- Collapse -->
      <view v-if="activeTab === 'collapse'" class="demo-section">
        <tt-card title="Collapse">
          <tt-collapse v-model="collapseVal">
            <text class="demo-text">Collapse panel content</text>
          </tt-collapse>
        </tt-card>
      </view>

      <!-- Space -->
      <view v-if="activeTab === 'space'" class="demo-section">
        <tt-card title="Space">
          <tt-space :size="12">
            <tt-button size="sm">A</tt-button>
            <tt-button size="sm">B</tt-button>
            <tt-button size="sm">C</tt-button>
          </tt-space>
          <view style="height:12px" />
          <tt-space direction="vertical" :size="8">
            <tt-button size="sm" block>Row 1</tt-button>
            <tt-button size="sm" block>Row 2</tt-button>
          </tt-space>
        </tt-card>
      </view>

      <!-- Typography -->
      <view v-if="activeTab === 'typography'" class="demo-section">
        <tt-card title="Typography">
          <tt-typography type="title" :level="2">Heading H2</tt-typography>
          <tt-typography type="title" :level="4">Heading H4</tt-typography>
          <tt-typography>Regular body text content.</tt-typography>
          <tt-typography bold>Bold text</tt-typography>
          <tt-typography underline>Underlined text</tt-typography>
          <tt-typography delete>Deleted text</tt-typography>
          <tt-typography type="link">Link text</tt-typography>
          <tt-typography :ellipsis="1">This is a very long text that should be truncated to one line only, demonstrating the ellipsis feature of the typography component.</tt-typography>
        </tt-card>
      </view>

      <!-- Slider -->
      <view v-if="activeTab === 'slider'" class="demo-section">
        <tt-card title="Slider">
          <tt-slider v-model="sliderVal" />
          <text class="demo-text">Value: {{ sliderVal }}</text>
        </tt-card>
        <tt-card title="Disabled">
          <tt-slider :model-value="70" disabled />
        </tt-card>
      </view>

      <!-- Picker -->
      <view v-if="activeTab === 'picker'" class="demo-section">
        <tt-card title="Picker">
          <tt-button @click="showPicker = true">Open Picker</tt-button>
        </tt-card>
        <tt-picker v-model:show="showPicker" :columns="pickerColumns" title="Select" />
      </view>

      <!-- DatePicker -->
      <view v-if="activeTab === 'datepicker'" class="demo-section">
        <tt-card title="DatePicker">
          <tt-button @click="showDatePicker = true">{{ dateVal || 'Select Date' }}</tt-button>
        </tt-card>
        <tt-date-picker v-model="dateVal" v-model:show="showDatePicker" title="Select Date" />
      </view>

      <!-- Upload -->
      <view v-if="activeTab === 'upload'" class="demo-section">
        <tt-card title="Upload">
          <tt-upload v-model:file-list="uploadFiles" :max-count="6" />
        </tt-card>
      </view>

      <!-- Table -->
      <view v-if="activeTab === 'table'" class="demo-section">
        <tt-card title="Table">
          <tt-table :columns="tableCols" :data="tableData" bordered striped />
        </tt-card>
      </view>

      <!-- Descriptions -->
      <view v-if="activeTab === 'descriptions'" class="demo-section">
        <tt-card title="Descriptions">
          <tt-descriptions title="User Info" :items="descItems" :column="2" bordered />
        </tt-card>
      </view>

      <!-- List -->
      <view v-if="activeTab === 'list'" class="demo-section">
        <tt-card title="List">
          <tt-list :finished="true" finished-text="No more data">
            <tt-cell title="Item 1" value="Detail" is-link />
            <tt-cell title="Item 2" value="Detail" is-link />
            <tt-cell title="Item 3" value="Detail" is-link />
          </tt-list>
        </tt-card>
      </view>

      <!-- Tooltip -->
      <view v-if="activeTab === 'tooltip'" class="demo-section">
        <tt-card title="Tooltip">
          <view class="demo-row" style="padding-top: 40px;">
            <tt-tooltip content="Top tip" placement="top"><tt-button size="sm">Top</tt-button></tt-tooltip>
            <tt-tooltip content="Bottom tip" placement="bottom"><tt-button size="sm">Bottom</tt-button></tt-tooltip>
          </view>
        </tt-card>
      </view>

      <!-- Sidebar -->
      <view v-if="activeTab === 'sidebar'" class="demo-section">
        <tt-card title="Sidebar">
          <view style="display: flex; height: 160px;">
            <tt-sidebar v-model="sidebarIdx" :items="sidebarItems" />
            <view style="flex: 1; padding: 16px; font-size: 13px;">Content for: {{ sidebarItems[sidebarIdx].text }}</view>
          </view>
        </tt-card>
      </view>

      <!-- Breadcrumb -->
      <view v-if="activeTab === 'breadcrumb'" class="demo-section">
        <tt-card title="Breadcrumb">
          <tt-breadcrumb :items="[{text:'Home',to:'/'},{text:'Category',to:'/cat'},{text:'Current Page'}]" />
        </tt-card>
      </view>

      <!-- Pagination -->
      <view v-if="activeTab === 'pagination'" class="demo-section">
        <tt-card title="Pagination">
          <tt-pagination v-model="pageNum" :total-items="50" :items-per-page="10" />
          <text class="demo-text">Page: {{ pageNum }}</text>
        </tt-card>
      </view>

      <!-- DropdownMenu -->
      <view v-if="activeTab === 'dropdown'" class="demo-section">
        <tt-card title="DropdownMenu">
          <tt-dropdown-menu v-model="dropdownVal" :options="dropdownOpts" title="Sort By" />
          <text class="demo-text">Selected: {{ dropdownVal }}</text>
        </tt-card>
      </view>

      <!-- Transition -->
      <view v-if="activeTab === 'transition'" class="demo-section">
        <tt-card title="Transition">
          <view class="demo-row">
            <tt-button size="sm" @click="showTransition = !showTransition">Toggle</tt-button>
          </view>
          <tt-transition :show="showTransition" name="fade">
            <view style="padding: 16px; background: var(--tt-muted, #f5f5f5); border-radius: 8px; margin-top: 8px;">
              <text class="demo-text">Fade transition content</text>
            </view>
          </tt-transition>
        </tt-card>
      </view>

      <!-- Grid / Row / Col -->
      <view v-if="activeTab === 'grid'" class="demo-section">
        <tt-card title="Row / Col">
          <tt-row :gutter="8">
            <tt-col :span="12"><view class="grid-demo-cell primary">12</view></tt-col>
            <tt-col :span="12"><view class="grid-demo-cell secondary">12</view></tt-col>
          </tt-row>
          <view style="height: 8px;" />
          <tt-row :gutter="8">
            <tt-col :span="8"><view class="grid-demo-cell primary">8</view></tt-col>
            <tt-col :span="16"><view class="grid-demo-cell secondary">16</view></tt-col>
          </tt-row>
        </tt-card>
        <tt-card title="Grid">
          <tt-grid :column-num="4" border>
            <view class="grid-item">A</view>
            <view class="grid-item">B</view>
            <view class="grid-item">C</view>
            <view class="grid-item">D</view>
          </tt-grid>
        </tt-card>
      </view>

      <!-- Sticky -->
      <view v-if="activeTab === 'sticky'" class="demo-section">
        <tt-card title="Sticky">
          <text class="demo-text">The Sticky component makes its child stick to the top of the scroll container when scrolled past.</text>
        </tt-card>
      </view>

      <!-- Theme -->
      <view v-if="activeTab === 'theme'" class="demo-section">
        <tt-card title="Theme System" description="shadcn-style CSS Variables">
          <view class="theme-demo">
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-primary, #171717);" />
              <text class="color-label">Primary</text>
            </view>
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-secondary, #f5f5f5);" />
              <text class="color-label">Secondary</text>
            </view>
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-destructive, #ef4444);" />
              <text class="color-label">Destructive</text>
            </view>
            <view class="color-row">
              <view class="color-swatch" style="background: var(--tt-muted, #f5f5f5);" />
              <text class="color-label">Muted</text>
            </view>
          </view>
        </tt-card>
        <tt-card title="Toggle Theme">
          <view class="theme-card-inner">
            <text class="theme-mode">{{ isDark ? 'Dark' : 'Light' }} Mode</text>
            <tt-switch v-model="isDark" @update:model-value="toggleTheme" />
          </view>
        </tt-card>
      </view>
    </view>
  </tt-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'tt-ui/composables/use-theme'

const { isDark, toggleTheme } = useTheme()

const activeTab = ref('button')
const tabs = [
  { label: 'Button', value: 'button' },
  { label: 'Input', value: 'input' },
  { label: 'Textarea', value: 'textarea' },
  { label: 'Check/Radio', value: 'check' },
  { label: 'Switch', value: 'switch' },
  { label: 'Search', value: 'search' },
  { label: 'NumBox', value: 'numbox' },
  { label: 'Form', value: 'form' },
  { label: 'Card', value: 'card' },
  { label: 'Badge', value: 'badge' },
  { label: 'Tag', value: 'tag' },
  { label: 'Divider', value: 'divider' },
  { label: 'Empty', value: 'empty' },
  { label: 'Progress', value: 'progress' },
  { label: 'Skeleton', value: 'skeleton' },
  { label: 'Avatar', value: 'avatar' },
  { label: 'Rate', value: 'rate' },
  { label: 'CountDown', value: 'countdown' },
  { label: 'Image', value: 'image' },
  { label: 'Cell', value: 'cell' },
  { label: 'Tabs', value: 'tabs' },
  { label: 'Navbar', value: 'navbar' },
  { label: 'Tabbar', value: 'tabbar' },
  { label: 'Steps', value: 'steps' },
  { label: 'Loading', value: 'loading' },
  { label: 'Toast', value: 'toast' },
  { label: 'Dialog', value: 'dialog' },
  { label: 'Popup', value: 'popup' },
  { label: 'Action', value: 'action' },
  { label: 'Sheet', value: 'sheet' },
  { label: 'Notice', value: 'notice' },
  { label: 'Collapse', value: 'collapse' },
  { label: 'Space', value: 'space' },
  { label: 'Typography', value: 'typography' },
  { label: 'Slider', value: 'slider' },
  { label: 'Picker', value: 'picker' },
  { label: 'DatePicker', value: 'datepicker' },
  { label: 'Upload', value: 'upload' },
  { label: 'Table', value: 'table' },
  { label: 'Desc', value: 'descriptions' },
  { label: 'List', value: 'list' },
  { label: 'Tooltip', value: 'tooltip' },
  { label: 'Sidebar', value: 'sidebar' },
  { label: 'Breadcrumb', value: 'breadcrumb' },
  { label: 'Pagination', value: 'pagination' },
  { label: 'Dropdown', value: 'dropdown' },
  { label: 'Transition', value: 'transition' },
  { label: 'Grid', value: 'grid' },
  { label: 'Sticky', value: 'sticky' },
  { label: 'Theme', value: 'theme' },
]

const inputVal = ref('')
const inputVal2 = ref('Hello')
const passwordVal = ref('')
const textareaVal = ref('')
const check1 = ref(true)
const check2 = ref(false)
const radio1 = ref(true)
const radio2 = ref(false)
const switchOn = ref(true)
const switchOn2 = ref(false)
const searchVal = ref('')
const numVal = ref(3)
const formName = ref('')
const formEmail = ref('')
const rateVal = ref(3)
const tabbarVal = ref(0)
const collapseVal = ref([])
const showToast = ref(false)
const showSuccessToast = ref(false)
const showDialog = ref(false)
const showAlert = ref(false)
const showPopup = ref(false)
const popupPos = ref<'center' | 'top' | 'bottom'>('center')
const showAS = ref(false)
const asActions = [
  { name: 'Edit' },
  { name: 'Delete', color: '#ef4444' },
  { name: 'Disabled', disabled: true },
]
const showSheet = ref(false)
const demoTab = ref('tab1')
const demoTabs = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Disabled', value: 'tab3', disabled: true },
]
const sliderVal = ref(40)
const showPicker = ref(false)
const pickerColumns = [{ text: 'Option A', value: 'a' }, { text: 'Option B', value: 'b' }, { text: 'Option C', value: 'c' }]
const showDatePicker = ref(false)
const dateVal = ref('')
const uploadFiles = ref<Array<{ url: string }>>([])
const tableCols = [{ key: 'name', title: 'Name' }, { key: 'age', title: 'Age' }, { key: 'role', title: 'Role' }]
const tableData = [{ name: 'Alice', age: 28, role: 'Dev' }, { name: 'Bob', age: 32, role: 'PM' }, { name: 'Carol', age: 25, role: 'QA' }]
const descItems = [{ label: 'Name', value: 'Alice' }, { label: 'Age', value: '28' }, { label: 'Email', value: 'alice@example.com' }, { label: 'Role', value: 'Developer' }]
const pageNum = ref(1)
const sidebarIdx = ref(0)
const sidebarItems = [{ text: 'All' }, { text: 'Hot' }, { text: 'New' }, { text: 'Sale' }]
const dropdownVal = ref('newest')
const dropdownOpts = [{ text: 'Newest', value: 'newest' }, { text: 'Popular', value: 'popular' }, { text: 'Price', value: 'price' }]
const showTransition = ref(true)
</script>

<style>
.page { padding: 0 16px 16px; min-height: 100vh; background: var(--tt-background, #fff); transition: background .3s; }
.header { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; }
.header-title { font-size: 20px; font-weight: 700; color: var(--tt-foreground, #0a0a0a); letter-spacing: -.5px; }
.header-right { display: flex; gap: 8px; }
.theme-toggle { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: var(--tt-radius, 6px); border: 1px solid var(--tt-border, #e5e5e5); background: var(--tt-background, #fff); cursor: pointer; }
.toggle-icon { font-size: 16px; }
.demo-section { display: flex; flex-direction: column; gap: 12px; }
.demo-row { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 8px; }
.demo-row:last-child { margin-bottom: 0; }
.demo-text { font-size: 14px; color: var(--tt-foreground, #0a0a0a); line-height: 1.6; }
.popup-content { padding: 40px 24px; text-align: center; min-height: 120px; display: flex; align-items: center; justify-content: center; }
.nav-action { font-size: 14px; color: var(--tt-primary, #171717); font-weight: 500; }
.form-item { display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; }
.form-label { font-size: 13px; font-weight: 500; color: var(--tt-foreground, #0a0a0a); }
.theme-demo { display: flex; flex-direction: column; gap: 12px; }
.color-row { display: flex; align-items: center; gap: 12px; }
.color-swatch { width: 32px; height: 32px; border-radius: var(--tt-radius, 6px); border: 1px solid var(--tt-border, #e5e5e5); flex-shrink: 0; }
.color-label { font-size: 13px; color: var(--tt-foreground, #0a0a0a); }
.theme-card-inner { display: flex; align-items: center; justify-content: space-between; }
.theme-mode { font-size: 15px; font-weight: 600; color: var(--tt-foreground, #0a0a0a); }
.grid-demo-cell { padding: 10px; text-align: center; border-radius: 4px; font-size: 12px; font-weight: 600; }
.grid-demo-cell.primary { background: var(--tt-primary, #171717); color: var(--tt-primary-foreground, #fafafa); }
.grid-demo-cell.secondary { background: var(--tt-secondary, #f5f5f5); color: var(--tt-secondary-foreground, #171717); }
.grid-item { padding: 12px; text-align: center; font-size: 13px; }
</style>
