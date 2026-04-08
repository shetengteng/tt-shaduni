import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtDropdownMenu from '../tt-dropdown-menu.vue'

describe('TtDropdownMenu', () => {
  const options = [{ text: 'A', value: 'a' }, { text: 'B', value: 'b' }]

  it('renders component', () => {
    const wrapper = mount(TtDropdownMenu, { props: { options, modelValue: 'a' } })
    expect(wrapper.find('.tt-dropdown-menu').exists()).toBe(true)
  })

  it('displays selected option text', () => {
    const wrapper = mount(TtDropdownMenu, { props: { options, modelValue: 'a' } })
    expect(wrapper.find('.tt-dropdown-menu__title').text()).toBe('A')
  })

  it('shows options after click', async () => {
    const wrapper = mount(TtDropdownMenu, { props: { options, modelValue: 'a' } })
    await wrapper.find('.tt-dropdown-menu__bar').trigger('click')
    const items = wrapper.findAll('.tt-dropdown-menu__option')
    expect(items.length).toBe(2)
  })
})
