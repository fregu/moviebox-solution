import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const Root = () => {
  // JSX is not valid javascript, it needs to be transpiled first
  return <div>Hello Gang!</div>
}

ReactDOM.render(<Root />, document.getElementById('root'))
