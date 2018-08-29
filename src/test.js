import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)
test('Test component shows content', () => {
  const { getByText } = render(<div>Hejhej</div>)
  expect(getByText(/^Hejhej/)).toBeInTheDocument()
})
