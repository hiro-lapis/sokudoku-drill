/**
 * ABCロジックのクイズ
 */
export default class Quiz {
    // property
    hint1: String
    hint2: String
    question: String
    answer: String
    orderList: string[]

    constructor(
    hint1: String,
    hint2: String,
    question: String,
    answer: String,
    orderList: string[],
  ) {
    this.hint1 = hint1
    this.hint2 = hint2
    this.question = question
    this.answer = answer
    this.orderList = orderList
  }
}
