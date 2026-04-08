import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSwiper from '../tt-swiper.vue'

describe('TtSwiper', () => {
  it('renders component', () => {
    const wrapper = mount(TtSwiper)
    expect(wrapper.find('.tt-swiper').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtSwiper, { slots: { default: '<div class="slide">1</div>' } })
    expect(wrapper.find('.slide').exists()).toBe(true)
  })
})
