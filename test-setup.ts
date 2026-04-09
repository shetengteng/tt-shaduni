import { config } from '@vue/test-utils'

config.global.stubs = {
  view: { template: '<div class="view"><slot /></div>' },
  text: { template: '<span class="text"><slot /></span>' },
  image: { template: '<img class="image" />' },
  input: {
    template: `
      <input
        class="input"
        v-bind="$attrs"
        @input="$emit('input', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @keyup.enter="$emit('confirm')"
      />
    `,
    emits: ['input', 'focus', 'blur', 'confirm'],
  },
  textarea: {
    template: `
      <textarea
        class="textarea"
        v-bind="$attrs"
        @input="$emit('input', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    `,
    emits: ['input', 'focus', 'blur'],
  },
  button: false,
  scroll_view: { template: '<div class="scroll-view"><slot /></div>' },
  swiper: { template: '<div class="swiper"><slot /></div>' },
  'swiper-item': { template: '<div class="swiper-item"><slot /></div>' },
}
