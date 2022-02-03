<template>
  <div>
    <p>slide_word</p>
    <input v-model="count">
    <button @click="change">ワードチェンジ</button>
    <!-- count数 -->
    <template v-for="(word, key) in wordList">
        <p :key="key">{{word}}</p>
    </template>
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

      for (let index = 1; index < this.count; index++) {
        const item = this.shuffle(list);
        this.wordList.push(item);
      }
    },
    shuffle(list: string[]) {
      return list.sort(() => 0.5 - Math.random());
    }
  },

})
</script>
