import styled from "@emotion/styled"

export const Error = styled.p({}, ({ theme }) => ({
  fontSize: theme.fontSizes.small,
  color: theme.colors.error,
  margin: 0,
  padding: 0,
}))
