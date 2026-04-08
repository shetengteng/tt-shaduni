import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtList from '../tt-list.vue'

describe('TtList', () => {
  it('renders slot content', () => {
    const wrapper = mount(TtList, { slots: { default: '<div class="item">A</div>' } })
    expect(wrapper.find('.item').exists()).toBe(true)
  })

  it('shows finished text when finished', () => {
    const wrapper = mount(TtList, { props: { finished: true, finishedText: 'Done' } })
    expect(wrapper.text()).toContain('Done')
  })

  it('shows loading text when loading', () => {
    const wrapper = mount(TtList, { props: { loading: true, loadingText: 'Wait...' } })
    expect(wrapper.text()).toContain('Wait...')
  })
})
