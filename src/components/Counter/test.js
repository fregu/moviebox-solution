import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Counter from 'components/Counter'

afterEach(cleanup)
test('The component displays 0 if no prop available', () => {
  const { getByTestId } = render(<Counter />)
  expect(getByTestId('counter').textContent).toBe('0')
})

test('The component displays the number provided', () => {
  const { getByTestId } = render(<Counter value="14" />)
  expect(getByTestId('counter').textContent).toBe('14')
})

// test('When the component is clicked increasy by value', () => {
//   const { getByTestId } = render(<Counter value="14" step="2" />)
//   const container = getByTestId('counter')
//   fireEvent(container)
//   expect(getByTestId('counter').textContent).toBe('16')
// })
//
// test('When the component is clicked increasy by 1', () => {
//   const { getByTestId } = render(<Counter value="14" />)
//   const container = getByTestId('counter')
//   fireEvent(container)
//   expect(getByTestId('counter').textContent).toBe('15')
// })
