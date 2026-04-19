import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtButton from '../tt-button.vue'

describe('TtButton', () => {
  it('renders default button', () => {
    const wrapper = mount(TtButton, { slots: { default: 'Click' } })
    expect(wrapper.text()).toContain('Click')
    expect(wrapper.classes()).toContain('tt-button')
    expect(wrapper.classes()).toContain('tt-button--default')
    expect(wrapper.classes()).toContain('tt-button--md')
  })

  it('applies variant class', () => {
    const wrapper = mount(TtButton, { props: { variant: 'destructive' } })
    expect(wrapper.classes()).toContain('tt-button--destructive')
  })

  it('applies size class', () => {
    const wrapper = mount(TtButton, { props: { size: 'lg' } })
    expect(wrapper.classes()).toContain('tt-button--lg')
  })

  it('applies disabled state', () => {
    const wrapper = mount(TtButton, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('tt-button--disabled')
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('applies loading state', () => {
    const wrapper = mount(TtButton, { props: { loading: true } })
    expect(wrapper.classes()).toContain('tt-button--loading')
    expect(wrapper.find('.tt-button__spinner').exists()).toBe(true)
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('applies block class', () => {
    const wrapper = mount(TtButton, { props: { block: true } })
    expect(wrapper.classes()).toContain('tt-button--block')
  })

  it('emits click when not disabled', async () => {
    const wrapper = mount(TtButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(TtButton, { props: { disabled: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(TtButton, { props: { loading: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('renders as view by default', () => {
    const wrapper = mount(TtButton)
    expect(wrapper.element.tagName.toLowerCase()).toBe('view')
  })

  it('renders as native button when openType is set', () => {
    const wrapper = mount(TtButton, { props: { openType: 'getUserInfo' } })
    expect(wrapper.element.tagName.toLowerCase()).toBe('button')
    expect(wrapper.attributes('open-type')).toBe('getUserInfo')
  })
})
