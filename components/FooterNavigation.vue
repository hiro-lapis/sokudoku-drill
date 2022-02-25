<template>
  <footer class="c-footer">
    <!-- Copyright © 2022- 速読どりる All rights reserved. -->
    <!-- スマホメニュー -->
    <ul class="c-sp-footer-nav__container">
      <NuxtLink to="/slide-word">
          <li class="c-sp-footer-nav__item">
              <i class="fas fa-door-open"></i>
              <span class="c-sp-footer-nav__item-text">スライドワード</span>
          </li>
      </NuxtLink>
      <NuxtLink to="/block-pattern">
          <li class="c-sp-footer-nav__item">
              <i class="fas fa-door-open"></i>
              <span class="c-sp-footer-nav__item-text">ブロックパターン</span>
          </li>
      </NuxtLink>
      <NuxtLink to="/abc-logic">
          <li class="c-sp-footer-nav__item">
              <i class="fas fa-door-open"></i>
              <span class="c-sp-footer-nav__item-text">ABCロジック</span>
          </li>
      </NuxtLink>
    </ul>
  </footer>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
@import '../assets/scss/foundation/_breakpoints.scss';

// SP/PC共通デザイン
.c-footer {
  position: fixed;
  bottom: 0;
  margin-top: auto;
  overflow: visible;
  width: 100%;
  @include pc() {
      overflow: hidden;
      position: relative;
  }
}
// SP
/**  2.SPフッターナビゲーション */
.c-sp-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    &-nav {
        &__container {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
        }
        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #444;
        }
        &__item-text {
            margin-top: 5px;
        }
    }
}
</style>
