import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTag from '../tt-tag.vue'

describe('TtTag', () => {
  it('renders with default type', () => {
    const wrapper = mount(TtTag, { slots: { default: 'Tag' } })
    expect(wrapper.find('.tt-tag--default').exists()).toBe(true)
    expect(wrapper.text()).toContain('Tag')
  })

  it('applies type class', () => {
    const wrapper = mount(TtTag, { props: { type: 'success' } })
    expect(wrapper.find('.tt-tag--success').exists()).toBe(true)
  })

  it('applies size class', () => {
    const wrapper = mount(TtTag, { props: { size: 'sm' } })
    expect(wrapper.find('.tt-tag--sm').exists()).toBe(true)
  })

  it('shows close icon when closeable', () => {
    const wrapper = mount(TtTag, { props: { closeable: true } })
    expect(wrapper.find('.tt-tag__close').exists()).toBe(true)
  })

  it('emits close on close click', async () => {
    const wrapper = mount(TtTag, { props: { closeable: true } })
    const close = wrapper.find('.tt-tag__close')
    expect(close.exists()).toBe(true)
    await close.trigger('click')
    expect(wrapper.emitted('close')).toHaveLength(1)
  })

  it('applies round class', () => {
    const wrapper = mount(TtTag, { props: { round: true } })
    expect(wrapper.find('.tt-tag--round').exists()).toBe(true)
  })
})
