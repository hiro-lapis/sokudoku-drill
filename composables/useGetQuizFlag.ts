export const useGetQuizFlag = (level: number) => {
  let worstFlag = false;
  let unclearFlag = false;

  // レベル:やさしいの時
  if (level === 0) {
    return { worstFlag, unclearFlag }
  }

  // 引数をかけ合わせてランダム値(0~99)取得
  let basisValue = Math.floor(Math.random() * 100)

  // レベル:ふつう/むずかしいの時は29%で最も低い要素を回答する問題を作成
  worstFlag = basisValue >= 70

  // レベル:むずかしいの時は29%でさらに答え[不明[になる問題を作成
  if (level === 2) {
    basisValue = Math.floor(Math.random() * 100)
    unclearFlag = basisValue >= 70
  }
  return { worstFlag, unclearFlag }
}
