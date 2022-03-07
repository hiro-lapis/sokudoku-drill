import { mount, shallowMount } from '@vue/test-utils'
import SlideWord from '@/pages/slide-word.vue'
import PageTitle from '@/components/PageTitle.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import Vue from 'vue'
import CompositionApi from '@vue/composition-api'

Vue.use(CompositionApi)

describe('SlideWord', () => {
  it("ページタイトルが正しいか", () => {
    const wrapper = shallowMount(SlideWord, {
      stubs: {
        PageTitle: PageTitle,
        SubmitButton: SubmitButton,
      }
    })
    wrapper.get("input").setValue(10);
    const title = wrapper.find('.c-title')
    expect(title.text()).toBe('スライドワード')
  })
})
