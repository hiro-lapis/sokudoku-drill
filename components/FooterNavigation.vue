<template>
  <footer class="c-footer">
    <!-- PCメニュー -->
    <template v-if="pcSize">
      <div class="c-pc-footer">
        <p>Copyright © 2022- 速読どりる All rights reserved.</p>
      </div>
    </template>
    <!-- スマホメニュー -->
    <template v-else>
      <ul class="c-sp-footer-nav__container">
        <NuxtLink to="/slide-word">
            <li class="c-sp-footer-nav__item">
                <font-awesome-icon icon="arrow-right"/>
                <span class="c-sp-footer-nav__item-text">スライドワード</span>
            </li>
        </NuxtLink>
        <NuxtLink to="/block-pattern">
            <li class="c-sp-footer-nav__item">
                <font-awesome-icon icon="cubes"/>
                <span class="c-sp-footer-nav__item-text">ブロックパターン</span>
            </li>
        </NuxtLink>
        <NuxtLink to="/abc-logic">
            <li class="c-sp-footer-nav__item">
                <font-awesome-icon icon="sliders-h"/>
                <span class="c-sp-footer-nav__item-text">ABCロジック</span>
            </li>
        </NuxtLink>
      </ul>
    </template>
  </footer>
</template>

<script lang="ts">
import { onMounted, ref, computed } from '@vue/composition-api'

export default {
   setup() {
      const windowWidth = ref(innerWidth)
      const onResize = () => {
        windowWidth.value = innerWidth
      }
      const pcSize = computed(() => {
        return windowWidth.value > 960
      })
      onMounted(() => {
        window.addEventListener("resize", onResize)
      })
     return {
       pcSize,
     }
   }
}

</script>

<style scoped lang="scss">
@import '../assets/scss/foundation/_breakpoints.scss';

// 1.SP/PC共通デザイン
.c-footer {
  position: fixed;
  bottom: 0;
  margin-top: auto;
  overflow: visible;
  width: 100%;
  height: 50px;
  background-color: aliceblue;
  @include pc() {
    overflow: hidden;
      position: relative;
      height: auto;
      background-color: initial;
  }
}

/**  2.PCフッターナビゲーション */
.c-pc-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 200px;
    box-sizing: border-box;
    width: 100%;

}
/**  3.SPフッターナビゲーション */
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
        position: relative;
        bottom: -25px;
        width: 100%;
        animation: slide-in 1s ease-out forwards;
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
// 回答文字のスライドフェードインアニメーション
@keyframes slide-in {
	0% {
		opacity: 0;
	}
	60% {
		transform: translateY(-40%);
    opacity: .3;
	}
	75% {
		transform: translateY(-51%);
    opacity: .8;
	}
	100% {
		opacity: 1;
		transform: translateY(-50%);
	}
}
</style>
