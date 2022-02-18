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
      <div class="c-abc-logic__container">
        <!-- 出題 -->
        <template v-for="(quiz, index) in quizList">
          <div :key="index">
            <div>
              <span>{{ (index + 1) }}</span>
              <span>{{ quiz.sentense1 }}</span>
              <span>{{ quiz.sentense2 }}</span>
            </div>
          </div>
        </template>
      </div>
      <!-- 回答 -->
      <div class="p-abc-logic__bottom">
        <h2 class="c-sub-title">答え</h2>
        <template v-for="(quiz, index) in quizList">
          <div :key="index" class="c-quiz-answer-word">
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
// import { useMakeABCQuiz } from '~/composables/useMakeABCQuiz';

const quizCount = 5;
const quizLevelList = [
  { key: 0, name: 'かんたん'},
  { key: 1, name: 'ふつう'},
  { key: 2, name: 'むずかしい'},
];
const fakeData = [
  { sentense1: 'AはBより高い', sentense2: 'AはCより高い', question: '一番高いのは?', answer: 'A'},
  { sentense1: 'BはCより高い', sentense2: 'AはCより高い', question: '一番高いのは?', answer: 'B'},
  { sentense1: 'AはBより遅い', sentense2: 'AはCより遅い', question: '一番速いのは?', answer: 'C'},
  { sentense1: 'AはBより高い', sentense2: 'AはCより高い', question: '一番高いのは?', answer: 'A'},
  { sentense1: 'BはCより高い', sentense2: 'AはCより高い', question: '一番高いのは?', answer: 'B'},
  { sentense1: 'AはBより遅い', sentense2: 'AはCより遅い', question: '一番速いのは?', answer: 'C'},
];
export default {
  name: 'ABC Logic',
  setup() {
    const quizLevel = ref(0)
    const quizList = ref([])

    const makeQuizList = () => {
      quizList.value = [];
      for (let index = 0; index < quizCount; index++) {
        const { worstFlag, unclearFlag } = useGetQuizFlag(quizLevel.value);
        console.log(worstFlag)
        console.log(unclearFlag)
        // quizList.value.push(useMakeABCQuiz(worstFlag, unclearFlag))
        quizList.value.push(...fakeData)
      }
    }
    onMounted(makeQuizList)
    return {
      quizLevelList,
      quizList,
      makeQuizList,
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
  &__bottom {
    display: flex;
    flex-wrap: wrap;
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

.c-quiz-answer-word {
  margin-right: 10px;
  margin-bottom: 8px;
}
.c-sub-title {
  font-size: 20px;
  display: block;
  width: 100%;
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
