<template>
  <div class="l-page">
    <div class="p-abc-logic">
      <div class="p-abc-logic__head">
        <page-title title="ABCロジック" background-title="ABC logic" />
      </div>
      <div class="p-form-container">
        <div class="p-form-container__input">
          <select v-model="quizLevelList" class="c-select">
          <option
                v-for="(item, index) in quizLevelList"
                :key="index"
                :value="item.key">{{item.name}}</option>
          </select>
        </div>
        <submit-button title="チェンジ!" @click-event="makeQuizList" />
      </div>
      <div class="p-abc-logic__body">
        <!-- クイズ -->
        <template v-for="(quiz, index) in quizList">
          <div :key="index">
            <div class="c-quiz">
              <span class="c-quiz__label">{{ (index + 1) }}</span>
              <div class="c-quiz__body">
                <span class="c-quiz__hint1">{{ quiz.hint1 }}</span>
                <span class="c-quiz__hint2">{{ quiz.hint2 }}</span>
                <span class="c-quiz__question">{{ quiz.question }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
      <!-- 回答 -->
      <div class="p-abc-logic__bottom">
        <h2 @click="display = !display">答え</h2>
          <template v-for="(quiz, index) in quizList">
            <div :key="index" class="c-quiz-answer-word" :class="[display ? 'answer--display' : 'answer--hidden' ]">
              <span>{{ (index + 1) }}:{{ quiz.answer }}</span>
            </div>
          </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted,ref } from '@vue/composition-api';
import { useGetQuizFlag } from '~/composables/useGetQuizFlag';
import { useMakeABCQuiz } from '~/composables/useMakeABCQuiz';
import Quiz from '~/modules/Quiz';

const quizCount = 30;
const quizLevelList = [
  { key: 0, name: 'かんたん'},
  { key: 1, name: 'ふつう'},
  { key: 2, name: 'むずかしい'},
];
export default {
  name: 'ABCLogic',
  setup() {
    const quizLevel = ref(0)
    const display = ref(false)
    const quizList = ref<Quiz[]>([])

    const makeQuizList = () => {
      quizList.value = [];
      for (let index = 0; index < quizCount; index++) {
        const { worstFlag, unclearFlag } = useGetQuizFlag(quizLevel.value);
        quizList.value.push(useMakeABCQuiz(worstFlag, unclearFlag))
      }
    }
    onMounted(makeQuizList)
    return {
      quizLevelList,
      quizList,
      makeQuizList,
      display,
    }
  }
}

</script>
<style lang="scss" scoped>
@import '../assets/scss/foundation/_breakpoints.scss';

.p-abc-logic {
  &__head {
    margin-bottom: 30px;
  }
  &__body {
    & > div {
      margin-bottom: 10px;
    }
  }
  &__bottom {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    @include pc() {
      font-size: 16px;
    }
  }
}
.p-form-container {
  display: flex;
  margin-bottom: 20px;
  &__input {
    width: 150px;
  }
}

.c-quiz-answer-word {
  margin-right: 10px;
  margin-bottom: 8px;
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

// クイズ
.c-quiz {
  font-size: 13px;
  display: flex;
  @include pc() {
    font-size: 16px;
  }
  &__label {
    display: inline-block;
    width: 30px;
  }
  &__body {
    @include pc() {
      display: inline;
      width: auto;
    }
    > span {
      margin-right: 18px;
    }
    > span:last-child {
      margin-right: 0px;
    }
  }
}
// 答え
.answer {
  &--display {
    opacity: 1;
    transition: all .5s;
  }
  &--hidden {
    opacity: 0;
    transition: all .5s;
  }

}
</style>
