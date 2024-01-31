import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './presentation/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '@store/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import queryClient from './presentation/utils/query.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
