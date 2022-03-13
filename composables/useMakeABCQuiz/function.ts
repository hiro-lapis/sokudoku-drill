import common from "~/plugins/common";

  /**
  * 要素をシャッフルした配列を取得
  */
const getElementList = (): string[] => {
  const elementList = ['A', 'B', 'C'];
  // 要素をシャッフル
  return common.shuffle(elementList);
}

/**
  * ヒント文作成用の要素取得
  * ABCのうちランダムに2つを取得,requiredがある時は引数+それ以外の要素を1つ取得し配列を作成
  */
const getElementForHint = (required?: string): string[] => {
  const elementList = common.shuffle(['A', 'B', 'C']);
  if (required === undefined) {
    // 末尾の要素を削除
    elementList.pop() !
    return [...elementList]
  }
  // 引数以外の要素をランダムに1つ取得(undefinedが入らないよう型指定)
  const filtered = common.shuffle(elementList.filter(item => item !== required)).pop() !
  // 引数と合わせ配列をシャッフルして返却
  return [...common.shuffle([required, filtered])]
}

/**
  * 問題構成から解なしになるクイズかどうかを判定
  */
const isClearQuiz = (questionIsHigh: boolean, value1: Number, value2: Number, value3: Number, value4: Number): boolean => {
  // ヒント文1・2両方で使われている値を取得
  const duplicateValue = [value1, value2, value3, value4].find((value, _, self) => self.indexOf(value) !== self.lastIndexOf(value)) !

  // 中央の値が2度使われている時は全順序が分かる
  if (duplicateValue === 1) {
    return true
  }
  // 最上値を問う問題では,最上値が2度使われているかどうか
  if (questionIsHigh) {
    return duplicateValue === 2
  }
  // 最下値を問う問題では,最下値が2度使われているかどうか
  return duplicateValue === 0
}
export  {
  getElementList,
  getElementForHint,
  isClearQuiz
}
