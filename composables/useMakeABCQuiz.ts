import Quiz from '../types/Quiz'
import { getElementList, getElementForHint, isClearQuiz } from './useMakeABCQuiz/function'
import common from '@/plugins/common'

/**
 * @param boolean worstFlag 最も低い・短い・小さい回答問題作成フラグ
 * @param boolean unclearFlag 回答が[不明]になる問題作成フラグ
 * @return Quiz
 */
export const useMakeABCQuiz = (worstFlag: boolean, unclearFlag: boolean): Quiz => {
  /** かんたん(最上を問い回答が明確)なクイズを作成 */
  const makeEasyQuiz = (list: string[]): Quiz => {
    // 回答を最初の要素に設定(答えが最下を問うものでも共通)
    const answer = list[2]
    // ヒント問いで使用する比較表現
    const expression =  expressionList[common.getRandomInt(expressionList.length)]
    // 最上を問うクイズとして定義
    const question = '一番'+ expression.high + 'のは?'

    // ヒント文で上位比較ワードを使用するかどうかのフラグ
    let isHighExp = common.getRandomBool()
    // ヒント文1で使用する要素を決定
    const [element1, element2] = getElementList()
    const [value1, value2] = [list.indexOf(element1), list.indexOf(element2)]
    let hint1: string
    // 要素のkey数を基準に優劣を比較
    if (isHighExp) {
      hint1 = (value1 > value2 ? element1 : element2) + 'は' + (value1 > value2 ? element2 : element1) + 'より' + expression.high
    } else {
      hint1 = (value1 < value2 ? element1 : element2) + 'は' + (value1 < value2 ? element2 : element1) + 'より' + expression.low
    }

    // ヒント文2の作成
    isHighExp = common.getRandomBool()
    // ヒント文1で使われてない要素はヒント文2で使用必須化
    const required = list.find(element => element !== element1 && element !==  element2) !
    let [element3, element4] = getElementForHint(required)
    let [value3, value4] = [list.indexOf(element3), list.indexOf(element4)]
    let isClear = isClearQuiz(true, value1, value2, value3, value4)

    // 必ず回答が出せるロジックになるよう調整
    while (isClear === false) {
      [element3, element4] = getElementForHint(required)
      value3 = list.indexOf(element3)
      value4 = list.indexOf(element4)
      isClear = isClearQuiz(true, value1, value2, value3, value4)
    }

    // 要素のkey数を基準に優劣を比較
    let hint2: string
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

  /** ふつう(最下を問い回答が明確)なクイズを作成 */
  const makeNormalQuiz = (list: string[]): Quiz => {
    // 回答を最初の要素に設定(答えが最下を問うものでも共通)
    // key[0]が最下位
    const answer = list[0]
    // ヒント問いで使用する比較表現
    const expression =  expressionList[common.getRandomInt(expressionList.length)]
    // 最下を問う文章を設定
    const question = '一番'+ expression.low + 'のは?'
    const questionIsHigh = false
    // ヒント文で上位比較ワードを使用するかどうかのフラグ
    let isHighExp = common.getRandomBool()
        // ヒント文1で使用する要素を決定
    const [element1, element2] = getElementList()
    const [value1, value2] = [list.indexOf(element1), list.indexOf(element2)]
    let hint1: string
    // 要素のkey数を基準に優劣を比較
    if (isHighExp) {
      hint1 = (value1 > value2 ? element1 : element2) + 'は' + (value1 > value2 ? element2 : element1) + 'より' + expression.high
    } else {
      hint1 = (value1 < value2 ? element1 : element2) + 'は' + (value1 < value2 ? element2 : element1) + 'より' + expression.low
    }

    // ヒント文2の作成
    isHighExp = common.getRandomBool()
    // ヒント文1で使われてない要素はヒント文2で使用必須化
    const required = list.find(element => element !== element1 && element !==  element2) !
    let [element3, element4] = getElementForHint(required)
    let [value3, value4] = [list.indexOf(element3), list.indexOf(element4)]
    let isClear = isClearQuiz(questionIsHigh, value1, value2, value3, value4)

    // 必ず回答が出せるロジックになるよう調整
    while (isClear === false) {
      [element3, element4] = getElementForHint(required)
      value3 = list.indexOf(element3)
      value4 = list.indexOf(element4)
      isClear = isClearQuiz(questionIsHigh, value1, value2, value3, value4)
    }

    // 要素のkey数を基準に優劣を比較
    let hint2: string
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
  /** むずかしい(最上・最下を問い回答が不明確)なクイズを作成 */
  const makeHardQuiz = (list: string[]): Quiz => {
    // 回答は不明
    const answer = '不明'
    // ヒント問いで使用する比較表現
    const expression =  expressionList[common.getRandomInt(expressionList.length)]
    // 問う文章はランダムに設定
    const questionIsHigh = common.getRandomBool()
    const question = '一番'+ (questionIsHigh ? expression.high : expression.low) + 'のは?'
    // ヒント文で上位比較ワードを使用するかどうかのフラグ
    let isHighExp = common.getRandomBool()
    // ヒント文1で使用する要素を決定
    const [element1, element2] = getElementList()
    const [value1, value2] = [list.indexOf(element1), list.indexOf(element2)]
    let hint1: string
    // 要素のkey数を基準に優劣を比較
    if (isHighExp) {
      hint1 = (value1 > value2 ? element1 : element2) + 'は' + (value1 > value2 ? element2 : element1) + 'より' + expression.high
    } else {
      hint1 = (value1 < value2 ? element1 : element2) + 'は' + (value1 < value2 ? element2 : element1) + 'より' + expression.low
    }

    // ヒント文2の作成
    isHighExp = common.getRandomBool()
    // ヒント文1で使われてない要素はヒント文2で使用必須化
    const required = list.find(element => element !== element1 && element !==  element2) !
    let [element3, element4] = getElementForHint(required)
    let [value3, value4] = [list.indexOf(element3), list.indexOf(element4)]
    let isClear = isClearQuiz(questionIsHigh, value1, value2, value3, value4)

    // 必ず回答が不明になるロジックになるよう調整
    let i = 0;
    while (isClear === true) {
      if (i > 10) {
        break
      }
      i++
      [element3, element4] = getElementForHint(required)
      value3 = list.indexOf(element3)
      value4 = list.indexOf(element4)
      isClear = isClearQuiz(questionIsHigh, value1, value2, value3, value4)
    }

    // 要素のkey数を基準に優劣を比較
    let hint2: string
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

  if (!worstFlag && !unclearFlag) {
    return makeEasyQuiz(getElementList());
  }
  if (worstFlag && !unclearFlag) {
    return makeNormalQuiz(getElementList());
  }
  return makeHardQuiz(getElementList());
}

const expressionList: readonly {high: string, low: string}[] = [
  { high: '高い', low: '低い'},
  { high: '速い', low: '遅い'},
  { high: '強い', low: '弱い'},
  { high: '長い', low: '短い'},
  { high: '重い', low: '軽い'},
]
