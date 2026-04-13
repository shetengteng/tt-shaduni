import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import TtIcon from '../tt-icon.vue'

const MOCK_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0"/></svg>'

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({ text: () => Promise.resolve(MOCK_SVG) })
  ) as any
})

describe('TtIcon', () => {
  it('loads SVG via name prop using fetch', async () => {
    mount(TtIcon, { props: { name: 'ri-home-line' } })
    await flushPromises()
    expect(global.fetch).toHaveBeenCalledWith('/static/svg/ri-home-line.svg')
  })

  it('renders inline SVG via svg prop without fetch', async () => {
    const wrapper = mount(TtIcon, { props: { svg: MOCK_SVG } })
    await flushPromises()
    expect(global.fetch).not.toHaveBeenCalled()
    expect(wrapper.html()).toContain('<svg')
  })

  it('replaces currentColor when color prop is set', async () => {
    const wrapper = mount(TtIcon, { props: { svg: MOCK_SVG, color: 'red' } })
    await flushPromises()
    expect(wrapper.html()).toContain('fill="red"')
    expect(wrapper.html()).not.toContain('currentColor')
  })

  it('renders empty when no name or svg provided', async () => {
    const wrapper = mount(TtIcon)
    await flushPromises()
    expect(global.fetch).not.toHaveBeenCalled()
    expect(wrapper.html()).not.toContain('<svg')
  })
})
