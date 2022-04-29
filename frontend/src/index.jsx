import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './index.scss'
import App from './components/App/App'




const root = document.getElementById('root')

const app = ReactDOMClient.createRoot(root)

app.render(
  <Provider store={store}>
    <App />
  </Provider>
)