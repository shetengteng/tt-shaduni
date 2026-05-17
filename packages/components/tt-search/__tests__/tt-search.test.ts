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

  it('applies default variant class', () => {
    const wrapper = mount(TtSearch)
    expect(wrapper.find('.tt-search--default').exists()).toBe(true)
  })

  it('applies ghost variant class when variant=ghost', () => {
    const wrapper = mount(TtSearch, { props: { variant: 'ghost' } })
    expect(wrapper.find('.tt-search--ghost').exists()).toBe(true)
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

  it('hides clear button by default', () => {
    const wrapper = mount(TtSearch, { props: { modelValue: 'hello' } })
    expect(wrapper.find('.tt-search__clear').exists()).toBe(false)
  })

  it('hides clear button when clearable but value is empty', () => {
    const wrapper = mount(TtSearch, { props: { clearable: true, modelValue: '' } })
    expect(wrapper.find('.tt-search__clear').exists()).toBe(false)
  })

  it('shows clear button when clearable=true and value is non-empty', () => {
    const wrapper = mount(TtSearch, { props: { clearable: true, modelValue: 'hello' } })
    expect(wrapper.find('.tt-search__clear').exists()).toBe(true)
  })

  it('emits update:modelValue("") and clear on clear click', async () => {
    const wrapper = mount(TtSearch, { props: { clearable: true, modelValue: 'hello' } })
    await wrapper.find('.tt-search__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    expect(wrapper.emitted('clear')).toHaveLength(1)
  })

  it('applies focused class on input focus', async () => {
    const wrapper = mount(TtSearch)
    const input = wrapper.find('input')
    await input.trigger('focus')
    expect(wrapper.find('.tt-search__input-wrap--focused').exists()).toBe(true)
    await input.trigger('blur')
    expect(wrapper.find('.tt-search__input-wrap--focused').exists()).toBe(false)
  })

  it('default placeholder is empty string', () => {
    const wrapper = mount(TtSearch)
    expect(wrapper.find('input').attributes('placeholder')).toBe('')
  })
})
