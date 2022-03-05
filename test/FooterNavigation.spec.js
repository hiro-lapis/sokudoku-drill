import { mount, RouterLinkStub } from '@vue/test-utils'
import FooterNavigation from '@/components/FooterNavigation.vue'

describe('FooterNavigation', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FooterNavigation, {
      shallow: true,
      stubs: {
        NuxtLink: RouterLinkStub,
        'font-awesome-icon': { template: '<i></i>' }
      }
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.get('footer').selector).toBe('footer')

    const links = wrapper.findAllComponents(RouterLinkStub)
    // 各テキスト&リンクのチェック
    expect(links.at(0).text()).toBe('スライドワード')
    expect(links.at(0).props().to).toBe('/slide-word')
    expect(links.at(1).text()).toBe('ブロックパターン')
    expect(links.at(1).props().to).toBe('/block-pattern')
    expect(links.at(2).text()).toBe('ABCロジック')
    expect(links.at(2).props().to).toBe('/abc-logic')
  })
})
