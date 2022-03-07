import { mount, RouterLinkStub } from '@vue/test-utils'
import HeaderLogo from '@/components/HeaderLogo.vue'

describe('HeaderLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HeaderLogo)
    expect(wrapper.find('.c-logo').text()).toBe('速読どりる')
  })
})
