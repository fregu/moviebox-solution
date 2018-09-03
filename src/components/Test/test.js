import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import createStore from 'store'
import { Provider } from 'react-redux'
import Test from 'components/Test'

const testStore = createStore({ counter: 14 })

afterEach(cleanup)

test('Test component shows content', () => {
  const { getByText, getByTestId } = render(
    <Provider store={testStore}>
      <Test color="blue">Hejhej</Test>
    </Provider>
  )

  expect(getByText('Hejhej')).toBeInTheDocument()
  expect(getByTestId('counter').textContent).toBe('14')

  fireEvent(
    getByText('Hejhej'),
    new MouseEvent('click', {
      bubbles: true, // click events must bubble for React to see it
      cancelable: true
    })
  )
  expect(getByTestId('counter').textContent).toBe('19')
})
