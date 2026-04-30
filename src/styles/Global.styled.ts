import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme.ts';

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    color: ${theme.colors.font};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  section {
    padding: 100px 0;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

  h3 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
  }
`