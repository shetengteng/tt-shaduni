import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtActionSheet from '../tt-action-sheet.vue'

const actions = [
  { name: 'Edit' },
  { name: 'Delete', color: 'red' },
  { name: 'Disabled', disabled: true },
]

describe('TtActionSheet', () => {
  it('renders action sheet container', () => {
    const wrapper = mount(TtActionSheet, { props: { show: true, actions } })
    expect(wrapper.find('.tt-action-sheet').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TtActionSheet, {
      props: { show: true, title: 'Actions', actions },
    })
    expect(wrapper.text()).toContain('Actions')
  })

  it('renders all action items', () => {
    const wrapper = mount(TtActionSheet, { props: { show: true, actions } })
    expect(wrapper.findAll('.tt-action-sheet__item').length).toBe(3)
  })

  it('shows cancel button', () => {
    const wrapper = mount(TtActionSheet, { props: { show: true, actions } })
    expect(wrapper.text()).toContain('Cancel')
  })

  it('emits select on action click', async () => {
    const wrapper = mount(TtActionSheet, { props: { show: true, actions } })
    const items = wrapper.findAll('.tt-action-sheet__item')
    await items[0].trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual([actions[0]])
  })

  it('emits cancel on cancel click', async () => {
    const wrapper = mount(TtActionSheet, { props: { show: true, actions } })
    const cancel = wrapper.find('.tt-action-sheet__cancel')
    await cancel.trigger('click')
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })

  it('applies disabled class to disabled items', () => {
    const wrapper = mount(TtActionSheet, { props: { show: true, actions } })
    const items = wrapper.findAll('.tt-action-sheet__item')
    expect(items[2].classes()).toContain('tt-action-sheet__item--disabled')
  })
})
