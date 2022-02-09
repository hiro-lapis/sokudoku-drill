import { mount } from '@vue/test-utils'
import SlideWord from '@/pages/slide-word.vue'

describe('SlideWord', () => {
  it("ページタイトルが正しいか", () => {
    const wrapper = mount(SlideWord)

    wrapper.get("input").setValue(10);
    const title = wrapper.find('.c-title')

    expect(title.text()).toBe('スライドワード')
  })

  // it("input count and click change button", async () => {
  // // test('is a Vue instance', () => {
  //   const wrapper = mount(SlideWord)

  //   wrapper.get("input").setValue(10);

  //   await wrapper.get("button").trigger("click");
  //   expect(title.text()).toBe('スライドワード')
  // })
})
