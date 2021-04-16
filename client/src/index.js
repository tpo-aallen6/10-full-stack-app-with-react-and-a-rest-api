import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/global.css'
import { Provider } from './Context'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
