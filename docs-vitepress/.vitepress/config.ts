import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TT ShadUni',
  description: 'A shadcn-style UniApp Vue3 component library',
  base: '/tt-shaduni/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/shetengteng/tt-shaduni' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/getting-started' },
            { text: 'Theming', link: '/guide/theming' },
            { text: 'Dark Mode', link: '/guide/dark-mode' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Basic',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Icon', link: '/components/icon' },
            { text: 'Image', link: '/components/image' },
            { text: 'Typography', link: '/components/typography' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Tag', link: '/components/tag' },
            { text: 'Divider', link: '/components/divider' },
            { text: 'Avatar', link: '/components/avatar' },
          ],
        },
        {
          text: 'Form',
          items: [
            { text: 'Input', link: '/components/input' },
            { text: 'Textarea', link: '/components/textarea' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'Search', link: '/components/search' },
            { text: 'Rate', link: '/components/rate' },
            { text: 'Slider', link: '/components/slider' },
            { text: 'DatePicker', link: '/components/date-picker' },
            { text: 'Picker', link: '/components/picker' },
            { text: 'NumberBox', link: '/components/number-box' },
            { text: 'Upload', link: '/components/upload' },
            { text: 'Form', link: '/components/form' },
          ],
        },
        {
          text: 'Display',
          items: [
            { text: 'Card', link: '/components/card' },
            { text: 'Cell', link: '/components/cell' },
            { text: 'Collapse', link: '/components/collapse' },
            { text: 'Progress', link: '/components/progress' },
            { text: 'Skeleton', link: '/components/skeleton' },
            { text: 'Empty', link: '/components/empty' },
            { text: 'CountDown', link: '/components/count-down' },
            { text: 'Steps', link: '/components/steps' },
            { text: 'Table', link: '/components/table' },
          ],
        },
        {
          text: 'Navigation',
          items: [
            { text: 'Navbar', link: '/components/navbar' },
            { text: 'Tabs', link: '/components/tabs' },
            { text: 'Tabbar', link: '/components/tabbar' },
          ],
        },
        {
          text: 'Feedback',
          items: [
            { text: 'Popup', link: '/components/popup' },
            { text: 'Dialog', link: '/components/dialog' },
            { text: 'Toast', link: '/components/toast' },
            { text: 'Loading', link: '/components/loading' },
            { text: 'ActionSheet', link: '/components/action-sheet' },
            { text: 'NoticeBar', link: '/components/notice-bar' },
            { text: 'Sheet', link: '/components/sheet' },
          ],
        },
        {
          text: 'Layout',
          items: [
            { text: 'Space', link: '/components/space' },
            { text: 'Grid', link: '/components/grid' },
            { text: 'SafeArea', link: '/components/safe-area' },
            { text: 'Sticky', link: '/components/sticky' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shetengteng/tt-shaduni' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present TT ShadUni',
    },
  },
})
