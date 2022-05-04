import { css, Theme } from "@emotion/react"
export const globalStyle = (theme: Theme) => css`
  body {
    font-family: 'Noto Sans JP', sans-serif;
    color: ${theme.colors.black};
    background-color: #F7FAFC;
  * {
    ::placeholder {
      color: rgb(117,117,117);
    }
  }
`
