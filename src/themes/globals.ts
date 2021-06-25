import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

html {
  overflow: scroll;
  scroll-behavior: smooth;
  overflow-x: auto;
}

body {
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
}

body, input, button, textarea {
  font: 400 16px 'Roboto', sans-serif;
}
`;
