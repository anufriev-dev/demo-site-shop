import React from 'react'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './index.scss'
import App from './components/App'
import {ThemeProvider, createTheme} from '@mui/material'

const root = document.getElementById('root')
const app = ReactDOMClient.createRoot(root)

const theme = createTheme({
  palette: {
    mode: 'light'
  }
})

app.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)