import { createGlobalStyle } from 'styled-components'
import { a11y, normalize, reset } from './utils'

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${a11y}

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  :root {
    /* Typography */
    --text: "Montserrat", sans-serif;
    --title: "STIX Two Text", serif;

    /* Colors */
    --white: #fff;
    --whiteTwo: #fff9f6;
    --blackOne: #000;
    --blackTwo: #333;
  }

  body {
    font-family: var(--text);
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
