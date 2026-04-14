import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TtToast from '../tt-toast.vue'

afterEach(() => {
  vi.useRealTimers()
})

describe('TtToast', () => {
  it('is hidden when show=false', () => {
    const wrapper = mount(TtToast, { props: { show: false } })
    expect(wrapper.find('.tt-toast').exists()).toBe(false)
  })

  it('is visible when show=true', () => {
    const wrapper = mount(TtToast, { props: { show: true } })
    expect(wrapper.find('.tt-toast').exists()).toBe(true)
  })

  it('renders message text', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, message: 'Done!' },
    })
    expect(wrapper.text()).toContain('Done!')
  })

  it('shows success icon for type=success', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, type: 'success' },
    })
    expect(wrapper.find('.tt-toast__icon').exists()).toBe(true)
  })

  it('shows loading spinner for type=loading', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, type: 'loading' },
    })
    expect(wrapper.find('.tt-toast__spinner').exists()).toBe(true)
  })

  it('shows fail icon for type=fail', () => {
    const wrapper = mount(TtToast, {
      props: { show: true, type: 'fail' },
    })
    expect(wrapper.find('.tt-toast__icon').exists()).toBe(true)
  })

  it('auto closes after duration', async () => {
    vi.useFakeTimers()
    const wrapper = mount(TtToast, {
      props: { show: true, duration: 1000 },
    })

    vi.advanceTimersByTime(1000)
    await nextTick()
    expect(wrapper.find('.tt-toast').classes()).toContain('tt-toast--fade')

    vi.advanceTimersByTime(200)
    await nextTick()
    expect(wrapper.emitted('update:show')?.[0]).toEqual([false])
  })

  it('does not auto close when loading', async () => {
    vi.useFakeTimers()
    const wrapper = mount(TtToast, {
      props: { show: true, type: 'loading', duration: 1000 },
    })

    vi.advanceTimersByTime(2000)
    await nextTick()
    expect(wrapper.emitted('update:show')).toBeUndefined()
    expect(wrapper.find('.tt-toast--fade').exists()).toBe(false)
  })

  it('does not auto close when duration is not positive', async () => {
    vi.useFakeTimers()
    const wrapper = mount(TtToast, {
      props: { show: true, duration: 0 },
    })

    vi.advanceTimersByTime(2000)
    await nextTick()
    expect(wrapper.emitted('update:show')).toBeUndefined()
    expect(wrapper.find('.tt-toast--fade').exists()).toBe(false)
  })
})
