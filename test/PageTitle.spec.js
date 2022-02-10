import { mount } from '@vue/test-utils'
import PageTitle from '@/components/PageTitle.vue'

describe('PageTitle', () => {
  it("check title and event", () => {
    const wrapper = mount(PageTitle,{
      propsData: {
        title: '見出しタイトルだよ',
        backgroundTitle: '背景タイトルに使う文字だよ',
      }
    })

    expect(wrapper.text()).toBe('見出しタイトルだよ')
    expect(wrapper.attributes('data-en')).toBe('背景タイトルに使う文字だよ')
  })
})
