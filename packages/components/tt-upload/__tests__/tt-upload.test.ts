import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TtUpload from '../tt-upload.vue'

describe('TtUpload', () => {
  it('renders upload component', () => {
    const wrapper = mount(TtUpload)
    expect(wrapper.find('.tt-upload').exists()).toBe(true)
  })

  it('renders add button', () => {
    const wrapper = mount(TtUpload, { props: { fileList: [] } })
    expect(wrapper.find('.tt-upload__add').exists()).toBe(true)
  })

  it('renders file previews', () => {
    const wrapper = mount(TtUpload, { props: { fileList: [{ url: 'a.jpg' }, { url: 'b.jpg' }] } })
    const items = wrapper.findAll('.tt-upload__preview')
    expect(items.length).toBe(2)
  })

  it('hides add button when max reached', () => {
    const wrapper = mount(TtUpload, { props: { fileList: [{ url: 'a.jpg' }], maxCount: 1 } })
    expect(wrapper.find('.tt-upload__add').exists()).toBe(false)
  })
})
