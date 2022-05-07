import React from 'react'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './index.scss'
import App from './components/app/App'

const root = document.getElementById('root')

const app = ReactDOMClient.createRoot(root)

app.render(
  <Provider store={store}>
    <App />
  </Provider>
)