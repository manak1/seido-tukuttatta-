import styled from "@emotion/styled"

export const Footer = styled.footer(
  {
    padding: "24px 16px 72px 16px",
    margin: "0 auto",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.bg,
    maxWidth: theme.maxWidth.default,
    borderLeft: `1px solid ${theme.colors.gray}`,
    borderRight: `1px solid ${theme.colors.gray}`,
  })
)

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
  "> * + *": {
    marginLeft: "8px",
  },
})

export const Logo = styled.img({
  width: "32px",
  height: "32px",
})

export const List = styled.ul({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  padding: "0",
  margin: "0",
  gap: "8px",
})

export const Link = styled.a(
  {
    textDecoration: "none",
  },
  ({ theme }) => ({
    color: theme.colors.black,
  })
)

export const Item = styled.li({
  margin: "0",
  padding: "0",
})

export const Author = styled.p({}, ({ theme }) => ({
  fontSize: theme.fontSizes.small,
}))

export const TwitterLink = styled.a({}, ({ theme }) => ({
  color: theme.colors.link,
  textDecoration: "underline",
  fontSize: theme.fontSizes.small,
}))
