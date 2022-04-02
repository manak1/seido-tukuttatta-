import styled from "@emotion/styled"

export const Nav = styled.nav(
  {
    width: "100%",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.primary,
  })
)

export const List = styled.ul({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  margin: "0",
})

export const ListItem = styled.li(
  {
    color: "#fff",
    fontWeight: "bold",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.small,
  })
)

export const Link = styled.a(
  {
    width: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    textDecoration: "none",
    padding: "6px 0",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.small,
  })
)
