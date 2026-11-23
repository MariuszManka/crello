import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    height:100%;
    position:relative;
    overflow:hidden;
    background-color: #fcae12;
  /* background-color: #227EA7; */
  }


  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
  
  p {
    font-size: 1.6rem;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  a{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }

  :focus-visible {
    outline: 3px solid #075985;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
