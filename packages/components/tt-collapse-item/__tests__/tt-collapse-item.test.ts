import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import TtCollapseItem from '../tt-collapse-item.vue'

describe('TtCollapseItem', () => {
  it('renders title', () => {
    const w = mount(TtCollapseItem, { props: { title: 'Hello', name: 'a' } })
    expect(w.find('.tt-collapse-item__title').text()).toBe('Hello')
  })

  it('shows content when name is in provided value', () => {
    const w = mount(TtCollapseItem, {
      props: { title: 'T', name: 'a' },
      global: {
        provide: {
          'tt-collapse-value': ref(['a']),
          'tt-collapse-toggle': () => {},
        },
      },
      slots: { default: '<span class="inner">body</span>' },
    })
    expect(w.find('.tt-collapse-item__body').exists()).toBe(true)
    expect(w.find('.inner').text()).toBe('body')
  })

  it('hides content when name is not in provided value', () => {
    const w = mount(TtCollapseItem, {
      props: { title: 'T', name: 'b' },
      global: {
        provide: {
          'tt-collapse-value': ref(['a']),
          'tt-collapse-toggle': () => {},
        },
      },
      slots: { default: 'body' },
    })
    expect(w.find('.tt-collapse-item__body').exists()).toBe(false)
  })

  it('calls parent toggle on header click', async () => {
    let toggled = ''
    const w = mount(TtCollapseItem, {
      props: { title: 'T', name: 'x' },
      global: {
        provide: {
          'tt-collapse-value': ref([]),
          'tt-collapse-toggle': (n: string | number) => { toggled = String(n) },
        },
      },
    })
    await w.find('.tt-collapse-item__header').trigger('click')
    expect(toggled).toBe('x')
  })

  it('applies disabled class and blocks toggle', async () => {
    let toggled = false
    const w = mount(TtCollapseItem, {
      props: { title: 'T', name: 'a', disabled: true },
      global: {
        provide: {
          'tt-collapse-value': ref([]),
          'tt-collapse-toggle': () => { toggled = true },
        },
      },
    })
    expect(w.find('.tt-collapse-item--disabled').exists()).toBe(true)
    await w.find('.tt-collapse-item__header').trigger('click')
    expect(toggled).toBe(false)
  })

  it('shows up arrow when open', () => {
    const w = mount(TtCollapseItem, {
      props: { title: 'T', name: 'a' },
      global: {
        provide: {
          'tt-collapse-value': ref(['a']),
          'tt-collapse-toggle': () => {},
        },
      },
    })
    expect(w.find('.tt-collapse-item__arrow--up').exists()).toBe(true)
  })
})
