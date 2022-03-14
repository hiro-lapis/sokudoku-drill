import { mount } from '@vue/test-utils'
import  BlockPattern from '@/pages/block-pattern.vue'
import PageTitle from '@/components/PageTitle.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import Vue from 'vue'
import CompositionApi from '@vue/composition-api'

Vue.use(CompositionApi)

describe(' BlockPattern', () => {
  it("表示テスト", async () => {
    const wrapper = mount( BlockPattern, {
      stubs: {
        PageTitle: PageTitle,
        SubmitButton: SubmitButton,
      }
    })

    const title = wrapper.find('.c-title')
    expect(title.text()).toBe('ブロックパターン')
  })
  it("機能テスト", async () => {
    const wrapper = mount( BlockPattern, {
      stubs: {
        PageTitle: PageTitle,
        SubmitButton: SubmitButton,
      }
    })
    const submitButton = wrapper.find('.c-button')

    // ボタンを押してワード表示させる
    await submitButton.trigger('click')
    const hiraganaList = wrapper.findAll('.c-word')
    expect(hiraganaList.at(1).text()).toMatch(/^[あ-ん]*$/)

    // 漢字の表示テスト
    const options = wrapper.findAll('option')
    options.at(1).setSelected()

    await submitButton.trigger('click')
    const kanjiList = wrapper.findAll('.c-word')
    // ひらがなでないことを確認
    expect(kanjiList.at(1).text()).toMatch(/[^あ-ん]*$/)
  })
})
