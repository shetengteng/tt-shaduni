import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSidebar from '../tt-sidebar.vue'

describe('TtSidebar', () => {
  const items = [{ text: 'All' }, { text: 'Hot' }, { text: 'New' }]

  it('renders items', () => {
    const wrapper = mount(TtSidebar, { props: { items, modelValue: 0 } })
    expect(wrapper.findAll('.tt-sidebar__item').length).toBe(3)
  })

  it('marks active item', () => {
    const wrapper = mount(TtSidebar, { props: { items, modelValue: 1 } })
    const active = wrapper.findAll('.tt-sidebar__item')[1]
    expect(active.classes()).toContain('tt-sidebar__item--active')
  })

  it('emits update:modelValue on click', async () => {
    const wrapper = mount(TtSidebar, { props: { items, modelValue: 0 } })
    await wrapper.findAll('.tt-sidebar__item')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
  })
})
