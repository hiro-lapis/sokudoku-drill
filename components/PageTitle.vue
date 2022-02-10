<template>
  <h1 class="c-title" :data-en="backgroundTitle">
    <span>{{ title }}</span>
  </h1>
</template>

<script lang="ts">

export default {
  props: {
      title: { type: String, default: '' },
      backgroundTitle: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
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
</style>
