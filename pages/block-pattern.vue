<template>
  <div class="l-page">
    <div class="p-block-pattern">
      <div class="p-block-pattern__head">
        <page-title title="ブロックパターン" background-title="block pattern" />
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
        <submit-button title="チェンジ!" @click-event="change" />
      </div>
      <div class="c-word-list__container">
        <template v-for="(list, index) in displayWordList">
          <div :key="index" class="c-word-list">
            <template v-for="(word, key) in list">
              <p :key="key" class="c-word" :class="{ 'u-margin-right-1p': isKanjiMode }">{{ word }}</p>
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
  { key: 1, name: '漢字',
  words: [
    '北海道',
    '青森',
    '岩手',
    '宮城',
    '秋田',
    '山形',
    '福島',
    '茨城',
    '栃木',
    '群馬',
    '埼玉',
    '千葉',
    '東京',
    '神奈川',
    '新潟',
    '富山',
    '石川',
    '福井',
    '山梨',
    '長野',
    '岐阜',
    '静岡',
    '愛知',
    '三重',
    '滋賀',
    '京都',
    '大阪',
    '兵庫',
    '奈良',
    '和歌山',
    '鳥取',
    '島根',
    '岡山',
    '広島',
    '山口',
    '徳島',
    '香川',
    '愛媛',
    '高知',
    '福岡',
    '佐賀',
    '長崎',
    '熊本',
    '大分',
    '宮崎',
    '鹿児島',
    '沖縄',
  ]}
];

export default {
  // page title
  name: 'BlockPattern',
  setup() {
    const displayWordList = ref([])
    const mode = ref(0)
    const isKanjiMode = ref(false)

    const change = () => {
      // 漢字モード切り替えフラグ更新
      isKanjiMode.value = mode.value === 1;

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
      isKanjiMode,
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
.u-margin-right-1p {
  margin-right: 10px;
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
</style>
