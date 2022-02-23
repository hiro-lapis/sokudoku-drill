import { shuffle } from "./shuffle";

/**
 * @param boolean worstFlag 最も低い・短い・小さい回答問題作成フラグ
 * @param boolean unclearFlag 回答が[不明]になる問題作成フラグ
 * @return Quiz
 */
export const useMakeABCQuiz = (worstFlag: boolean, unclearFlag: boolean): Quiz => {
  /**
   * 要素をシャッフルした配列を取得
   */
  const getElementList = (): string[] => {
    const elementList = ['A', 'B', 'C'];
    // 要素をシャッフル
    return shuffle(elementList);
  }
  /**
   * ヒント文作成用の要素取得
   * ABCのうちランダムに2つを取得,requiredがある時は引数+それ以外の要素を1つ取得し配列を作成
   */
  const getElementForHint = (required?: string): string[] => {
    const elementList = shuffle(['A', 'B', 'C']);
    if (required === undefined) {
      // 末尾の要素を削除
      elementList.pop()
      return [...elementList]
    }
    // 引数以外の要素をランダムに1つ取得(undefinedが入らないよう型指定)
    const filtered = shuffle(elementList.filter(item => item !== required)).pop() !
    // 引数と合わせ配列をシャッフルして返却
    return [...shuffle([required, filtered])]
  }
  /**
   * 0~maxの範囲でランダムに整数を取得
   */
  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max)
  }
  /**
   * ランダムに真偽値取得
   */
  const getRandomBool = (): boolean => {
    return Math.random() < 0.5
  }
  /** かんたん(最上を問い回答が明確)なクイズを作成 */
  const makeEasyQuiz = (list: string[]): Quiz => {
    // 回答を最初の要素に設定(答えが最下を問うものでも共通)
    const answer = list[0]
    // ヒント問いで使用する比較表現
    const expression =  expressionList[getRandomInt(expressionList.length)]
    // 最上を問うクイズとして定義
    const question = '一番'+ expression.high + 'のは?'

    // ヒント文で上位比較ワードを使用するかどうかのフラグ
    let isHighExp = getRandomBool()
    // ヒント文1で使用する要素を決定
    const [element1, element2] = getElementForHint()
    const value1 = list.indexOf(element1)
    const value2 = list.indexOf(element2)
    let hint1: string;
    // 要素のkey数を基準に優劣を比較
    if (isHighExp) {
      hint1 = (value1 > value2 ? element1 : element2) + 'は' + (value1 > value2 ? element2 : element1) + 'より' + expression.high
    } else {
      hint1 = (value1 < value2 ? element1 : element2) + 'は' + (value1 < value2 ? element2 : element1) + 'より' + expression.low
    }

    // ヒント文2の作成
    isHighExp = getRandomBool()
    // ヒント文1で使われてない要素はヒント文2で使用必須にする
    const required = list.find(element => element !== element1 || element2) !
    const [element3, element4] = getElementForHint(required)
    const value3 = list.indexOf(element3)
    const value4 = list.indexOf(element4)
    let hint2: string;
    // 要素のkey数を基準に優劣を比較
    // TODO:必ず回答が出せるロジックになるよう修正
    if (isHighExp) {
      hint2 = (value3 > value4 ? element3 : element4) + 'は' + (value3 > value4 ? element4 : element3) + 'より' + expression.high
    } else {
      hint2 = (value3 < value4 ? element3 : element4) + 'は' + (value3 < value4 ? element4 : element3) + 'より' + expression.low
    }
    return new Quiz(
      hint1,
      hint2,
      question,
      answer,
      list
    )
  }

  /** ふつう(最上・最下を問い回答が明確)なクイズを作成 */
  // const makeNormalQuiz = (list: string[]): Quiz => {
  //   // 回答を最初の要素に設定(答えが最下を問うものでも共通)
  //   const answer = list[0]
  //   // ヒント問いで使用する比較表現
  //   const expression =  expressionList[getRandomInt(expressionList.length)]
  //   // 最上・最下どちらを問うクイズかを決める
  //   const standardIsHigh = getRandomBool()
  //   const question = '一番'+ (standardIsHigh ? expression.high : expression.low) + 'のは?'
  //   TODO:
  //   TODO: クイズの最上を問う時はkeyが高い
  /**
   * TODO:比較ロジック実装
   * 必ず答えを出すためのヒント文生成
   * 答えを必ず出すせるように、ヒント文２で初出になる要素と他の要素との序列をもとにヒント文作成パターンを制限
   * 最上を問うクイズの時はlistのkey値が高い方が高い
   * 最下を問うクイズの時はlistのkey値が高い方が低い
   */
  // }
  /** むずかしい(最上・最下を問い回答が明確)なクイズを作成 */
  // const makeHardQuiz = (list: string[]): Quiz => {
  // }

  // console.log(worstFlag)
  // console.log(unclearFlag)

  // let quiz: Quiz;
  if (!unclearFlag && !worstFlag) {
    return makeEasyQuiz(getElementList());
  }
  // if (unclearFlag && !worstFlag) {
  //   return makeNormalQuiz(getElementList());
  // }
  // if (unclearFlag && worstFlag) {
  //   return makeHardQuiz(getElementList());
  // }

  return makeEasyQuiz(getElementList());
}

class Quiz {
    // property
    public hint1: String
    private hint2: String
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

const expressionList: readonly {high: string, low: string}[] = [
  { high: '高い', low: '低い'},
  { high: '遅い', low: '速い'},
  { high: '大きい', low: '小さい'},
  { high: '短い', low: '長い'},
  { high: '重い', low: '軽い'},
];
