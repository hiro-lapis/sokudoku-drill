<template>
  <div class="l-page">
    <div class="p-block-pattern">
      <div class="p-block-pattern__head">
        <page-title title="ABCロジック" background-title="ABC logic" />
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
      <div class="c-abc-logic__container">
        <!-- ループレンダリング -->
        <!-- 問題No -->
        <!-- 問題文 -->
        <!-- 問題回答欄 -->
        <!-- ループ終了-->

        <!-- 問題No:正解-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted,ref } from '@vue/composition-api';

const elementList = ['A', 'B', 'C'];
export default {
  name: 'ABC Logic',
  setup() {
    // ロジック要素シャッフル
    // 問題文作成メソッドにロジック要素の配列を渡す
    // key(問題No)/問題文/回答を生成し返却
    // 画面表示用のdataにpush
    // 30回ループ
    // onMountedでの実行処理追加
  }
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

.abc-logic {
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
