import common from '../../plugins/common'

test('ランダム整数の取得テスト', (): void => {
    const result: number[] = [common.getRandomInt(10000)]
    for (let i = 0; i < 5; i++) {
        result.push(common.getRandomInt(10000))
    }
    //実行結果の値を比較して異なることをテスト
    result.forEach((res, i, array) => {
        let key = i + (i > 0 ? -1 : 1)
        expect(res).not.toBe(array[key])
    })
})

test('ランダム真偽値の取得テスト', (): void => {
    const result: boolean = common.getRandomBool()
    expect(typeof result).toBe('boolean')
})

test('シャッフル関数のテスト', (): void => {
    const before = ['1', '2', '3', '4', '5']
    const result = common.shuffle(before)
    // 構成する要素が変わってないこと
    expect(before).toEqual(expect.arrayContaining(result))
    expect(result).toEqual(expect.arrayContaining(before))
})
