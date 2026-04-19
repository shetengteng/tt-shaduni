import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import TtFormItem from '../tt-form-item.vue'
import TtForm from '../../tt-form/tt-form.vue'

describe('TtFormItem', () => {
  it('renders label text', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'Name' } })
    expect(wrapper.text()).toContain('Name')
  })

  it('shows required asterisk when required', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'Email', required: true } })
    expect(wrapper.find('.tt-form-item__required').exists()).toBe(true)
    expect(wrapper.find('.tt-form-item__required').text()).toBe('*')
  })

  it('hides required asterisk by default', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'Phone' } })
    expect(wrapper.find('.tt-form-item__required').exists()).toBe(false)
  })

  it('renders slot content', () => {
    const wrapper = mount(TtFormItem, {
      props: { label: 'Field' },
      slots: { default: '<input placeholder="test" />' },
    })
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('hides label when hideLabel=true', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'X', hideLabel: true } })
    expect(wrapper.find('.tt-form-item__label').exists()).toBe(false)
    expect(wrapper.classes()).toContain('tt-form-item--no-label')
  })

  it('renders arrow when arrow=true', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'X', arrow: true } })
    expect(wrapper.find('.tt-form-item__arrow').exists()).toBe(true)
  })

  it('emits click only when clickable=true', async () => {
    const noClick = mount(TtFormItem, { props: { label: 'X' } })
    await noClick.trigger('click')
    expect(noClick.emitted('click')).toBeUndefined()

    const clickable = mount(TtFormItem, { props: { label: 'X', clickable: true } })
    await clickable.trigger('click')
    expect(clickable.emitted('click')).toBeTruthy()
  })

  it('applies vertical direction class', () => {
    const wrapper = mount(TtFormItem, { props: { label: 'X', direction: 'vertical' } })
    expect(wrapper.classes()).toContain('tt-form-item--vertical')
  })

  it('inherits list mode from parent TtForm via inject', () => {
    const Parent = defineComponent({
      components: { TtForm, TtFormItem },
      template: `
        <TtForm variant="list">
          <TtFormItem label="A" />
          <TtFormItem label="B" />
          <TtFormItem label="C" :border="false" />
        </TtForm>
      `,
    })
    const wrapper = mount(Parent)
    const items = wrapper.findAll('.tt-form-item')
    expect(items).toHaveLength(3)
    expect(items[0].classes()).toContain('tt-form-item--list')
    expect(items[0].classes()).toContain('tt-form-item--list-border')
    expect(items[1].classes()).toContain('tt-form-item--list-border')
    expect(items[2].classes()).toContain('tt-form-item--list')
    expect(items[2].classes()).not.toContain('tt-form-item--list-border')
  })

  it('uses parent labelWidth via inject', () => {
    const Parent = defineComponent({
      components: { TtForm, TtFormItem },
      template: `
        <TtForm label-width="200px">
          <TtFormItem label="A" />
        </TtForm>
      `,
    })
    const wrapper = mount(Parent)
    const labelEl = wrapper.find('.tt-form-item__label').element as HTMLElement
    expect(labelEl.style.width).toBe('200px')
  })

  it('local labelWidth overrides parent labelWidth', () => {
    const Parent = defineComponent({
      components: { TtForm, TtFormItem },
      template: `
        <TtForm label-width="200px">
          <TtFormItem label="A" label-width="320px" />
        </TtForm>
      `,
    })
    const wrapper = mount(Parent)
    const labelEl = wrapper.find('.tt-form-item__label').element as HTMLElement
    expect(labelEl.style.width).toBe('320px')
  })
})
