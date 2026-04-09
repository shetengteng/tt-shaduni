import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSearch from '../tt-search.vue'

describe('TtSearch', () => {
  it('renders search container', () => {
    const wrapper = mount(TtSearch)
    expect(wrapper.find('.tt-search').exists()).toBe(true)
  })

  it('renders input wrapper with icon', () => {
    const wrapper = mount(TtSearch)
    expect(wrapper.find('.tt-search__input-wrap').exists()).toBe(true)
    expect(wrapper.find('.tt-search__icon').exists()).toBe(true)
  })

  it('shows cancel button when showCancel=true', () => {
    const wrapper = mount(TtSearch, { props: { showCancel: true } })
    expect(wrapper.find('.tt-search__cancel').exists()).toBe(true)
  })

  it('emits cancel on cancel click', async () => {
    const wrapper = mount(TtSearch, { props: { showCancel: true } })
    await wrapper.find('.tt-search__cancel').trigger('click')
    expect(wrapper.emitted('cancel')).toHaveLength(1)
  })

  it('hides cancel button by default', () => {
    const wrapper = mount(TtSearch)
    expect(wrapper.find('.tt-search__cancel').exists()).toBe(false)
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(TtSearch, { props: { modelValue: '' } })
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    await input.trigger('input', { detail: { value: 'keyword' } })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['keyword'])
  })

  it('emits search on confirm', async () => {
    const wrapper = mount(TtSearch, { props: { modelValue: 'keyword' } })
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    await input.trigger('confirm')
    expect(wrapper.emitted('search')).toHaveLength(1)
    expect(wrapper.emitted('search')?.[0]).toEqual(['keyword'])
  })
})
