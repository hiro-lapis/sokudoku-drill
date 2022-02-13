<template>
  <header class="c-header">
    <div class="c-header__logo" @click="moveHome">
      <header-logo />
    </div>
    <div class="c-header__menu">
      <nav class="c-nav">
        <ul class="c-nav__unorder-list">
          <li class="c-nav__list">
            <NuxtLink to="/slide-word">スライドワード</NuxtLink>
          </li>
          <li class="c-nav__list">
            <NuxtLink to="/block-pattern">ブロックパターン</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
import { useRouter } from '#imports'

export default {
  setup() {
    const route = useRouter()

    const moveHome = () => {
      route.push({ name: 'index' })
    }

    return { moveHome }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/foundation/_breakpoints.scss';

.c-header {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  position: relative;
  @include pc() {
    padding: 20px 40px;
  }
  &__logo {
    margin: auto;
    @include pc() {
      margin: 0;
    }
  }
  &__menu {
    display: none;
    @include pc() {
      display: inline-block;
    }
  }
}

.c-nav__unorder-list {
  display: flex;
}
</style>
