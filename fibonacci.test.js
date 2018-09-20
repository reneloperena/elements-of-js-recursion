/* eslint-env jest */
import fibonacci from './fibonacci'

test('fibonacci should be a function', () => {
  expect(typeof fibonacci).toEqual('function')
})

test("fibonacci should give the correct result", () => {
  expect(fibonacci(0)).toEqual(0)
  expect(fibonacci(1)).toEqual(1)
  expect(fibonacci(2)).toEqual(1)
  expect(fibonacci(5)).toEqual(5)
  expect(fibonacci(10)).toEqual(55)
})
