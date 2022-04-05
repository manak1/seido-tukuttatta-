import styled from "@emotion/styled"

export const Header = styled.header(
  {
    display: "flex",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
    padding: "8px 16px",
    borderBottom: `1px solid ${theme.colors.gray}`,
  })
)

export const Title = styled.h1({}, ({ theme }) => ({
  color: theme.colors.black,
  fontSize: theme.fontSizes.medium,
  margin: 0,
}))

export const Link = styled.a({
  textDecoration: "none",
})
