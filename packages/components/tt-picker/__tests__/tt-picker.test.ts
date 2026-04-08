import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtPicker from '../tt-picker.vue'

describe('TtPicker', () => {
  const columns = [{ text: 'A', value: 'a' }, { text: 'B', value: 'b' }]

  it('hidden when show is false', () => {
    const wrapper = mount(TtPicker, { props: { show: false, columns } })
    expect(wrapper.find('.tt-picker').exists()).toBe(false)
  })

  it('renders when show is true', () => {
    const wrapper = mount(TtPicker, { props: { show: true, columns } })
    expect(wrapper.find('.tt-picker').exists()).toBe(true)
    expect(wrapper.find('.tt-picker__toolbar').exists()).toBe(true)
  })

  it('renders title', () => {
    const wrapper = mount(TtPicker, { props: { show: true, columns, title: 'Select' } })
    expect(wrapper.find('.tt-picker__title').text()).toBe('Select')
  })

  it('emits cancel on cancel click', async () => {
    const wrapper = mount(TtPicker, { props: { show: true, columns } })
    await wrapper.find('.tt-picker__cancel').trigger('click')
    expect(wrapper.emitted('cancel')).toHaveLength(1)
    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
  })

  it('emits confirm on confirm click', async () => {
    const wrapper = mount(TtPicker, { props: { show: true, columns } })
    await wrapper.find('.tt-picker__confirm').trigger('click')
    expect(wrapper.emitted('confirm')).toHaveLength(1)
  })
})
