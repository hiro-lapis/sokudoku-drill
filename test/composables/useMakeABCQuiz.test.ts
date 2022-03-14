import { getElementList, getElementForHint, isClearQuiz } from '~/composables/useMakeABCQuiz/function'

test('ロジックテスト用要素の取得テスト', () => {
  const result = getElementList()
  expect(result.length).toBe(3)
  expect(result).toEqual(expect.arrayContaining(['A', 'B', 'C']))
})

test('ロジックテスト用ヒント文取得テスト', () => {
  const result = getElementForHint()
  expect(result.length).toBe(2)
})
test('ロジックテスト用回答タイプ判定テスト', () => {
  const result = isClearQuiz(true, 0, 1, 2, 1)
  expect(result).toBe(true)
})
