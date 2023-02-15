import { css } from '@emotion/react';

const reset = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, input,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    overflow-x: hidden;
  }

  ol, ul, li {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-transform: none;
  }
  input {
    outline: none;
  }
`;

export default reset;
