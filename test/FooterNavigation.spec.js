import { mount, RouterLinkStub } from '@vue/test-utils'
import FooterNavigation from '@/components/FooterNavigation.vue'

describe('FooterNavigation', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FooterNavigation, {
      stubs: {
      NuxtLink: RouterLinkStub,
      }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.contains('footer')).toBe(true)

    const links = wrapper.findAll(RouterLinkStub)
    // 各リンクテキストのチェック
    expect(links.at(0).text()).toBe('スライドワード')
  })
})
