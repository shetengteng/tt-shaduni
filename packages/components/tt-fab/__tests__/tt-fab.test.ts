import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtFab from '../tt-fab.vue'
import type { TtFabItem } from '../props'

describe('TtFab', () => {
  it('renders default FAB with primary type and square shape', () => {
    const wrapper = mount(TtFab)
    expect(wrapper.find('.tt-fab').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__main').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__main--primary').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__main--square').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__main--regular').exists()).toBe(true)
  })

  it('renders extended FAB when text is set', () => {
    const wrapper = mount(TtFab, { props: { text: '添加学生' } })
    expect(wrapper.find('.tt-fab__main--extended').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__main-text').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__main-text').text()).toBe('添加学生')
  })

  it('applies size class for mini / regular / large', () => {
    const mini = mount(TtFab, { props: { size: 'mini' } })
    expect(mini.find('.tt-fab__main--mini').exists()).toBe(true)
    const regular = mount(TtFab, { props: { size: 'regular' } })
    expect(regular.find('.tt-fab__main--regular').exists()).toBe(true)
    const large = mount(TtFab, { props: { size: 'large' } })
    expect(large.find('.tt-fab__main--large').exists()).toBe(true)
  })

  it('applies circle shape when shape=circle', () => {
    const wrapper = mount(TtFab, { props: { shape: 'circle' } })
    expect(wrapper.find('.tt-fab__main--circle').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__main--square').exists()).toBe(false)
  })

  it('disabled prevents click emission', async () => {
    const wrapper = mount(TtFab, { props: { disabled: true } })
    await wrapper.find('.tt-fab__main').trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
    expect(wrapper.find('.tt-fab__main--disabled').exists()).toBe(true)
  })

  it('emits click on main button click', async () => {
    const wrapper = mount(TtFab)
    await wrapper.find('.tt-fab__main').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('clicking main button with items opens the menu', async () => {
    const items: TtFabItem[] = [
      { key: 'a', icon: 'ri-user-add-line', text: '添加学生' },
      { key: 'b', icon: 'ri-calendar-event-line', text: '添加课程' },
    ]
    const wrapper = mount(TtFab, { props: { items } })
    await wrapper.find('.tt-fab__main').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('clicking item emits select with item and index, autoCloses', async () => {
    const items: TtFabItem[] = [
      { key: 'a', icon: 'ri-user-add-line', text: '添加学生' },
      { key: 'b', icon: 'ri-calendar-event-line', text: '添加课程' },
    ]
    const wrapper = mount(TtFab, { props: { items, modelValue: true } })
    const itemEls = wrapper.findAll('.tt-fab__item')
    expect(itemEls.length).toBe(2)
    await itemEls[1].trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual([items[1], 1])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('autoClose=false keeps menu open after item click', async () => {
    const items: TtFabItem[] = [{ key: 'a', icon: 'ri-add-line', text: 'A' }]
    const wrapper = mount(TtFab, {
      props: { items, modelValue: true, autoClose: false },
    })
    await wrapper.find('.tt-fab__item').trigger('click')
    expect(wrapper.emitted('select')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('direction prop applies correct items class', () => {
    const items: TtFabItem[] = [{ key: 'a', icon: 'ri-add-line' }]
    const up = mount(TtFab, { props: { items, modelValue: true, direction: 'up' } })
    expect(up.find('.tt-fab__items--up').exists()).toBe(true)
    const down = mount(TtFab, { props: { items, modelValue: true, direction: 'down' } })
    expect(down.find('.tt-fab__items--down').exists()).toBe(true)
    const left = mount(TtFab, { props: { items, modelValue: true, direction: 'left' } })
    expect(left.find('.tt-fab__items--left').exists()).toBe(true)
    const right = mount(TtFab, { props: { items, modelValue: true, direction: 'right' } })
    expect(right.find('.tt-fab__items--right').exists()).toBe(true)
  })

  it('item badge renders when item.badge is set', () => {
    const items: TtFabItem[] = [{ key: 'a', icon: 'ri-add-line', badge: 9 }]
    const wrapper = mount(TtFab, { props: { items, modelValue: true } })
    expect(wrapper.find('.tt-fab__item-badge').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__item-badge-text').text()).toBe('9')
  })

  it('item badge=0 still renders (badge !== undefined)', () => {
    const items: TtFabItem[] = [{ key: 'a', icon: 'ri-add-line', badge: 0 }]
    const wrapper = mount(TtFab, { props: { items, modelValue: true } })
    expect(wrapper.find('.tt-fab__item-badge').exists()).toBe(true)
    expect(wrapper.find('.tt-fab__item-badge-text').text()).toBe('0')
  })

  it('v-model two-way binding syncs prop and internal state', async () => {
    const wrapper = mount(TtFab, {
      props: {
        items: [{ key: 'a', icon: 'ri-add-line' }],
        modelValue: false,
      },
    })
    await wrapper.setProps({ modelValue: true })
    expect(wrapper.find('.tt-fab__items').isVisible()).toBe(true)
  })

  it('position=custom applies offsetTop/offsetLeft styles', () => {
    const wrapper = mount(TtFab, {
      props: {
        position: 'custom',
        offsetTop: '100px',
        offsetBottom: '',
        offsetLeft: '50px',
        offsetRight: '',
      },
    })
    const root = wrapper.find('.tt-fab')
    expect(root.classes()).toContain('tt-fab--custom')
    const styleAttr = root.attributes('style') || ''
    expect(styleAttr).toContain('top: 100px')
    expect(styleAttr).toContain('left: 50px')
  })

  it('disabled item does not emit select', async () => {
    const items: TtFabItem[] = [
      { key: 'a', icon: 'ri-add-line', text: 'A', disabled: true },
    ]
    const wrapper = mount(TtFab, { props: { items, modelValue: true } })
    await wrapper.find('.tt-fab__item').trigger('click')
    expect(wrapper.emitted('select')).toBeUndefined()
    expect(wrapper.find('.tt-fab__item--disabled').exists()).toBe(true)
  })
})
