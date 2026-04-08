import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtSlider from '../tt-slider.vue'

describe('TtSlider', () => {
  it('renders with default props', () => {
    const wrapper = mount(TtSlider)
    expect(wrapper.classes()).toContain('tt-slider')
    expect(wrapper.find('.tt-slider__track').exists()).toBe(true)
  })

  it('applies disabled class', () => {
    const wrapper = mount(TtSlider, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('tt-slider--disabled')
  })

  it('computes bar width from modelValue', () => {
    const wrapper = mount(TtSlider, { props: { modelValue: 50, min: 0, max: 100 } })
    const bar = wrapper.find('.tt-slider__bar')
    expect(bar.attributes('style')).toContain('width: 50%')
  })

  it('computes 0% when modelValue equals min', () => {
    const wrapper = mount(TtSlider, { props: { modelValue: 0, min: 0, max: 100 } })
    const bar = wrapper.find('.tt-slider__bar')
    expect(bar.attributes('style')).toContain('width: 0%')
  })
})
