import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reset from 'styled-reset'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    font-family: Pretendard;
    user-select: none;
  }
  
  a {
    font-family: Pretendard;
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
    font-family: Pretendard;
    border: none;
    cursor: pointer;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
)
