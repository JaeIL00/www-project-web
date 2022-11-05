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
    color: #242528;
    text-decoration: none;
  }
  
  strong {
    font-family: www;
    color: #242528;
  }

  span {
    line-height: 1.18rem;
    letter-spacing: -0.02rem;
    color: #5b5d6c;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>
)
