// // import { shuffle } from "./shuffle";

// /**
//  * @param boolean worstFlag 最も低い・短い・小さい回答問題作成フラグ
//  * @param boolean unclearFlag 回答が[不明]になる問題作成フラグ
//  * @return array sentences ヒント文
//  * @return stringanswer  答え
//  */
// export const useMakeABCQuiz = (worstFlag: boolean, unclearFlag: boolean) => {
//   /** 最上をを問うタイプの回答が明確なクイズを作成 */
//   const getElementList = (): string[] => {
//     const elementList = ['A', 'B', 'C'];
//     // 要素をシャッフル
//     return shuffle(elementList);
//   }
//   const makeEasyQuiz = (list: string[]): Quiz => {
//     const expression = bestExpressionList[getRandomInt()];
//     const firstSentense = list[0] + 'は' + list[1] + 'より' + expression;

//   }
//   const getRandomInt = (max: number): number => {
//     return Math.floor(Math.random() * max);
//   }

//   console.log(worstFlag)
//   console.log(unclearFlag)

//   let quiz: Quiz;

//   if (!unclearFlag && !worstFlag) {
//     quiz = makeEasyQuiz();
//   } else {
//     { sentences, answer } = makeBestClearQuiz(getElementList());
//   }

//   return { quiz }
// }

// class Quiz {
//     // property
//     sentense1: String
//     sentense2: String
//     question: String
//     answer: String

//     constructor(
//     sentense1: String,
//     sentense2: String,
//     question: String,
//     answer: String
//   ) {
//     this.sentense1 = sentense1
//     this.sentense2 = sentense2
//     this.question = question
//     this.answer = answer
//   }
// }
// // const sentenseList = [
// //   'AはBより高い'

// // ];
// // const orderList = [
// //   'AはBより', // 0
// //   'AはCより', // 1
// //   'BはAより', // 2
// //   'BはCより', // 3
// //   'CはAより', // 4
// //   'CはBより'  // 5
// // ];
// const bestExpressionList = ['高い', '速い', '大きい', '長い'];
// // const worstExpressionList = ['低い', '遅い', '小さい', '短い'];

// // const quizList = {
// //   easy: [
// //   ],
// //   normal: [],
// //   hard: [],
// // };
