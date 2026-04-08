import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtPopup from '../tt-popup.vue'

describe('TtPopup', () => {
  it('is hidden when show=false', () => {
    const wrapper = mount(TtPopup, { props: { show: false } })
    expect(wrapper.find('.tt-popup').exists()).toBe(false)
  })

  it('is visible when show=true', () => {
    const wrapper = mount(TtPopup, { props: { show: true } })
    expect(wrapper.find('.tt-popup').exists()).toBe(true)
  })

  it('applies position class on root', () => {
    const wrapper = mount(TtPopup, {
      props: { show: true, position: 'bottom' },
    })
    expect(wrapper.find('.tt-popup--bottom').exists()).toBe(true)
  })

  it('shows overlay by default', () => {
    const wrapper = mount(TtPopup, { props: { show: true } })
    expect(wrapper.find('.tt-popup__overlay').exists()).toBe(true)
  })

  it('emits update:show on overlay click', async () => {
    const wrapper = mount(TtPopup, { props: { show: true } })
    const overlay = wrapper.find('.tt-popup__overlay')
    await overlay.trigger('click')
    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
  })

  it('shows close button when closeable', () => {
    const wrapper = mount(TtPopup, {
      props: { show: true, closeable: true },
    })
    expect(wrapper.find('.tt-popup__close').exists()).toBe(true)
  })

  it('applies round class on content', () => {
    const wrapper = mount(TtPopup, { props: { show: true, round: true } })
    expect(wrapper.find('.tt-popup__content--round').exists()).toBe(true)
  })
})
