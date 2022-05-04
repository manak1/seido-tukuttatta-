import styled from "@emotion/styled"

import WrapperComponent from "~/components/ui/Wrapper"

export const Header = styled.header(
  {
    display: "flex",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray}`,
    maxWidth: theme.maxWidth.default,
    margin: "0 auto",
    padding: "8px 0",
  })
)

export const Title = styled.h1({}, ({ theme }) => ({
  color: theme.colors.black,
  fontWeight: "bold",
  fontSize: theme.fontSizes.medium,
  margin: "0 0 0 16px",
}))

export const Link = styled.a({
  textDecoration: "none",
})

export const Wrapper = styled(WrapperComponent)({
  display: "flex",
  alignItems: "center",
})
