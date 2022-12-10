import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reset from 'styled-reset'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { Store } from './store/Store'

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    font-family: Pretendard;
    user-select: none;
  }
  
  a {
    color: var(--black-300);
    text-decoration: none;
  }
  
  strong {
    font-family: www;
    color: var(--black-300);
  }

  span {
    line-height: 1.18rem;
    letter-spacing: -0.02rem;
    color: var(--black-200);
  }

  button {
    border: none;
    cursor: pointer;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={Store}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>
)
