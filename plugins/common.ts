export default {
  /**
  * 0~maxの範囲でランダムに整数を取得
  */
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
  },
  /**
  * ランダムに真偽値取得
  */
  getRandomBool(): boolean {
    return Math.random() < 0.5
  },
  /**
  * 配列をランダムに並べかえ
  * @param array
  */
  shuffle(array: string[]) {
    return array.sort(() => 0.5 - Math.random()) !
  }
}
