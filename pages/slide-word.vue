<template>
  <div>
    <p>slide_word</p>
    <input v-model="count">
    <button @click="change">ワードチェンジ</button>
    <div class="container">
      <!-- count数 -->
      <template v-for="(list, index) in wordList">
        <div :key="index" class="c-word-list">
          <template v-for="(word, key) in list">
            <p :key="key" class="c-word">{{ word }}</p>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // page title
  name: 'slide_word',
  mounted () {
    this.change();
  },

  data() {
    return {
      count: 10,
      wordList: [],
    }
  },

  methods:{
    change() {
      this.wordList = [];

        const list = [
          '男は西の山へ',
          '女は東の山へ',
          '男は西の川へ',
          '女は西の川へ',
          '男は東の川へ',
          '女は東の川へ',
          '女は西の山へ',
        ];
      for (let index = 0; index < this.count; index++) {
        this.wordList.push(this.shuffle(list).concat());
        console.log(this.wordList);
      }
    },
    shuffle(list: string[]): string[] {
      return list.sort(() => 0.5 - Math.random());
    }
  },

})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.c-word-list {
  display: flex;
  flex-direction: column;
}
</style>
