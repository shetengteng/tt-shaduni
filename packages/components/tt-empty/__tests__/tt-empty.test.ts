import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtEmpty from '../tt-empty.vue'

describe('TtEmpty', () => {
  it('renders default description', () => {
    const wrapper = mount(TtEmpty)
    expect(wrapper.text()).toContain('No data')
  })

  it('renders custom description', () => {
    const wrapper = mount(TtEmpty, { props: { description: 'Nothing here' } })
    expect(wrapper.text()).toContain('Nothing here')
  })

  it('renders slot content', () => {
    const wrapper = mount(TtEmpty, {
      slots: { default: '<button>Retry</button>' },
    })
    expect(wrapper.text()).toContain('Retry')
  })
})
