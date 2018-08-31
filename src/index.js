import React from 'react'
import ReactDOM from 'react-dom'
import Test from 'components/Test'
import './index.css'

const Root = () => {
  // JSX is not valid javascript, it needs to be transpiled first
  return (
    <div>
      <Test prop1="1" someOfRest={{ rest: { foo: 'bar' } }}>
        Children
      </Test>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
