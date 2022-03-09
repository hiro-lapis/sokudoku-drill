import { useGetQuizFlag } from "~/composables/useGetQuizFlag";

jest.mock('../../plugins/common', () => {
    const originalHook = jest.requireActual('../../plugins/common')
    return {
      __esModle: true,
      ...originalHook,
      getRandomInt: () => 99
    }
})

test('useGetQuizFlag', () => {
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
