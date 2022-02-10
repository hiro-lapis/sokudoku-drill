<template>
  <div class="l-page">
    <div class="p-slide-word">
      <div class="p-slide-word__head">
        <page-title title="スライドワード" background-title="slide word" />
      </div>
      <div class="p-form-container">
        <div class="p-form-container__input">
          <input
            v-model="count"
            class="c-input"
            placeholder="ワード数"
            max="100"
            @keyup.enter.exact="change"
          />
        </div>
        <submit-button title="チェンジ!" @click-event="change" />
      </div>
      <div class="c-word-list__container">
        <template v-for="(list, index) in wordList">
          <div :key="index" class="c-word-list">
            <template v-for="(word, key) in list">
              <p :key="key" class="c-word">{{ word }}</p>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted,ref } from '@vue/composition-api';

export default {
  // page title
  name: 'SlideWord',
  setup() {
    const wordList = ref([])
    const count = ref(10)
    const change = () => {
      wordList.value = []
      const num = count.value > 100 ? 100 : count.value
      for (let i = 0; i < num; i++) {
        wordList.value.push(shuffle().concat())
      }
    }
    onMounted(change)

    const shuffle = () => {
      const words = [
        '男は西の山へ',
        '女は東の山へ',
        '男は西の川へ',
        '女は西の川へ',
        '男は東の川へ',
        '女は東の川へ',
        '女は西の山へ',
      ]
      return words.sort(() => 0.5 - Math.random())
    }

    return {
      wordList,
      count,
      change,
      shuffle,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/foundation/_breakpoints.scss';

.p-slide-word {
  &__head {
    margin-bottom: 30px;
  }
  @include pc() {
  }
}
.p-form-container {
  display: flex;
  margin-bottom: 20px;
  &__input {
    width: 150px;
  }
}

.c-word-list {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 50px;
  &__container {
    display: flex;
    flex-wrap: wrap;
    max-width: 980px;
  }
}
.c-word {
  margin-bottom: 10px;
}
.c-input {
  padding: 5px 10px;
  box-sizing: border-box;
  // height: 48px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
}
</style>
