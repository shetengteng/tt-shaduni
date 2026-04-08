import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtNoticeBar from '../tt-notice-bar.vue'

describe('TtNoticeBar', () => {
  it('renders with text', () => {
    const wrapper = mount(TtNoticeBar, { props: { text: 'Notice!' } })
    expect(wrapper.text()).toContain('Notice!')
  })

  it('shows close button when closeable', () => {
    const wrapper = mount(TtNoticeBar, {
      props: { text: 'Info', closeable: true },
    })
    expect(wrapper.find('.tt-notice-bar__close').exists()).toBe(true)
  })

  it('emits close on close click', async () => {
    const wrapper = mount(TtNoticeBar, {
      props: { text: 'Info', closeable: true },
    })
    const close = wrapper.find('.tt-notice-bar__close')
    if (close.exists()) {
      await close.trigger('click')
      expect(wrapper.emitted('close')).toBeTruthy()
    }
  })

  it('applies custom color and background', () => {
    const wrapper = mount(TtNoticeBar, {
      props: { text: 'Alert', color: '#fff', background: '#f00' },
    })
    const style = wrapper.find('.tt-notice-bar').attributes('style') || ''
    expect(style).toContain('#fff')
    expect(style).toContain('#f00')
  })
})
