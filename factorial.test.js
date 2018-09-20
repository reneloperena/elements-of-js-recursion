/* eslint-env jest */
import factorial from './factorial'

test('factorial should be a function', () => {
  expect(typeof factorial).toEqual('function')
})

test("factorial should give the correct result", () => {
  expect(factorial(5)).toEqual(120)
  expect(factorial(10)).toEqual(3628800)
  expect(factorial(1)).toEqual(1)
})
