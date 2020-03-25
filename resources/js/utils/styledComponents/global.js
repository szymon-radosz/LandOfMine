import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  img{
      max-width: 100%;
  }
  .row{
      margin: 0 !important;
  }
  `;
