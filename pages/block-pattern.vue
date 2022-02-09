<template>
  <div class="l-page">
    <div class="p-block-pattern">
      <div class="p-block-pattern__head">
        <h1 class="c-title" data-en="block pattern">
          <span>ブロックパターン</span>
        </h1>
      </div>
      <div class="p-form-container">
        <div class="p-form-container__input">
          <select v-model="mode" class="c-select">
          <option
                v-for="(item, index) in wordList"
                :key="index"
                :value="item.key">{{item.name}}</option>
          </select>

        </div>
        <button class="c-button" @click="change">チェンジ!</button>
      </div>
      <div class="c-word-list__container">
        <template v-for="(list, index) in displayWordList">
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

// ブロック数
const blockCount = 8;
const wordList = [
  { key: 0, name: 'ひらがな',
  words: [
      'あ',
      'い',
      'う',
      'え',
      'お',
      'か',
      'き',
      'く',
      'け',
      'こ',
      'さ',
      'し',
      'す',
      'せ',
      'そ',
      'た',
      'ち',
      'つ',
      'て',
      'と',
      'な',
      'に',
      'ぬ',
      'ね',
      'の',
      'は',
      'ひ',
      'ふ',
      'へ',
      'ほ',
      'ま',
      'み',
      'む',
      'め',
      'も',
      'や',
      'ゆ',
      'よ',
      'わ',
      'を',
      'ん',
  ]},
  { key: 1, name: '漢字', words: []}
];

export default {
  // page title
  name: 'BlockPattern',
  setup() {
    const displayWordList = ref([])
    const mode = ref(0)

    const change = () => {
      // 初期化
      displayWordList.value = []
      // 選択したモードに応じたワード原本を取得
      const item = wordList.find (word => word.key === mode.value)

      for (let i = 0; i < blockCount; i++) {
        displayWordList.value.push(shuffle(item.words).concat())
      }
    }
    onMounted(change)

    const shuffle = (words: []) => {
      return words.sort(() => 0.5 - Math.random())
    }

    return {
      wordList,
      mode,
      displayWordList,
      change,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/foundation/_breakpoints.scss';

.p-block-pattern {
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
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 300px;
  flex-wrap: wrap;
  @include pc() {
    margin-left: 0;
    margin-right: 20px;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    max-width: 980px;
  }
}
.c-word {
  margin-bottom: 10px;
}
.c-title {
  font-size: 30px;
  position: relative;
  padding-top: 30px;
  border-bottom: 1px solid rgba(5, 62, 98, 1);
  span {
    position: relative;
    z-index: 2;
  }
  &::before {
    content: attr(data-en);
    position: absolute;
    top: 0px;
    left: 0;
    color: rgba(5, 62, 98, 0.2);
    font-size: 40px;
    text-transform: uppercase;
    z-index: 1;
  }
}
.c-select {
  padding: 5px 10px;
  box-sizing: border-box;
  // height: 48px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
}
.c-button {
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  width: 150px;
  padding: 5px 10px;
}
</style>
