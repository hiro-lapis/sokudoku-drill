import { useGetQuizFlag } from "~/composables/useGetQuizFlag";

jest.mock('../../plugins/common', () => {
    const original = jest.requireActual('../../plugins/common')
    return {
      __esModle: true,
      ...original,
      getRandomInt: () => 70
    }
})

test('ふつう,むずかしいでの高難度問題フラグがtrueになるか', () => {
  const [ easy, normal, hard ] = [0, 1, 2]
  let { worstFlag, unclearFlag } = useGetQuizFlag(easy)
  expect(worstFlag).toBe(false)
  expect(unclearFlag).toBe(false);

  ({ worstFlag, unclearFlag } = useGetQuizFlag(normal))
  expect(worstFlag).toBe(true)
  expect(unclearFlag).toBe(false);

  ({ worstFlag, unclearFlag } = useGetQuizFlag(hard))
  expect(worstFlag).toBe(true)
  expect(unclearFlag).toBe(true)
})

jest.mock('../../plugins/common', () => {
    const original = jest.requireActual('../../plugins/common')
    return {
      __esModle: true,
      ...original,
      getRandomInt: () => 70
    }
})

test('ふつう,むずかしいでの高難度問題フラグがfalseになるか', () => {
  const [ easy, normal, hard ] = [0, 1, 2]
  let { worstFlag, unclearFlag } = useGetQuizFlag(easy)
  expect(worstFlag).toBe(false)
  expect(unclearFlag).toBe(false);

  ({ worstFlag, unclearFlag } = useGetQuizFlag(normal))
  expect(worstFlag).toBe(true)
  expect(unclearFlag).toBe(false);

  ({ worstFlag, unclearFlag } = useGetQuizFlag(hard))
  expect(worstFlag).toBe(true)
  expect(unclearFlag).toBe(true)
})
