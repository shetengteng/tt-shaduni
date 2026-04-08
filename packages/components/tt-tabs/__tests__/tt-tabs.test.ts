import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtTabs from '../tt-tabs.vue'

const items = [
  { label: 'Tab A', value: 'a' },
  { label: 'Tab B', value: 'b' },
  { label: 'Tab C', value: 'c', disabled: true },
]

describe('TtTabs', () => {
  it('renders all tab items', () => {
    const wrapper = mount(TtTabs, { props: { items, modelValue: 'a' } })
    expect(wrapper.findAll('.tt-tabs__item')).toHaveLength(3)
  })

  it('marks active tab', () => {
    const wrapper = mount(TtTabs, { props: { items, modelValue: 'a' } })
    const first = wrapper.findAll('.tt-tabs__item')[0]
    expect(first.classes()).toContain('tt-tabs__item--active')
  })

  it('emits update:modelValue on tab click', async () => {
    const wrapper = mount(TtTabs, { props: { items, modelValue: 'a' } })
    await wrapper.findAll('.tt-tabs__item')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b'])
  })

  it('does not emit on disabled tab click', async () => {
    const wrapper = mount(TtTabs, { props: { items, modelValue: 'a' } })
    await wrapper.findAll('.tt-tabs__item')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('applies disabled class to disabled tabs', () => {
    const wrapper = mount(TtTabs, { props: { items, modelValue: 'a' } })
    const third = wrapper.findAll('.tt-tabs__item')[2]
    expect(third.classes()).toContain('tt-tabs__item--disabled')
  })
})
