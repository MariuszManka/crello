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
`