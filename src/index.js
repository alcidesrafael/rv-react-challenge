import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import Dashboard from './components/Dashboard'
import Routes from './routes'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Dashboard>
        <Routes />
      </Dashboard>
    </Router>
  </Provider>,
  document.getElementById('root')
)
