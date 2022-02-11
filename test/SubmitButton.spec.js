import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'
const spy = jest.fn()

describe('SubmitButton', () => {
  it("check title and event", () => {
    const wrapper = mount(SubmitButton,{
      mocks: { $emit: spy},
      propsData: { title: 'ボタンタイトルだよ'}
    })
    wrapper.find('button').trigger('click')

    // spyでemitされたイベントを読み取る
    expect(spy).toHaveBeenCalledWith('click-event')
    expect(wrapper.text()).toBe('ボタンタイトルだよ')
  })
})
