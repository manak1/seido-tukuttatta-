import styled from "@emotion/styled"

export const Wrapper = styled.div({}, ({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: theme.maxWidth.default,
  padding: "0 16px",
  margin: "0 auto",
}))
