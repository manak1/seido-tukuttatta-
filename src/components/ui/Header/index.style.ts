import styled from "@emotion/styled"

export const Header = styled.header(
  {
    display: "flex",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
    padding: "8px 0",
    border: `1px solid ${theme.colors.gray}`,
    maxWidth: theme.maxWidth.default,
    margin: "0 auto",
  })
)

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "4px",
})

export const Logo = styled.img({
  width: "33px",
  height: "33px",
  transform: "scale(-1, 1)",
})

export const Title = styled.h1({}, ({ theme }) => ({
  color: theme.colors.black,
  fontSize: theme.fontSizes.medium,
  margin: 0,
}))

export const Link = styled.a({
  textDecoration: "none",
})
