import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './features/store'
import './index.css'
import App from './App'

// set axios base url
axios.defaults.baseURL = '/api/v1'
// axios.defaults.baseURL = 'http://localhost:8000/api/v1'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
