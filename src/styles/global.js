import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Segoe UI', 'Helvetica', sans-serif;
    background: aliceblue;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
  }

  body > div {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;
