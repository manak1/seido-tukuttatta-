import styled from "@emotion/styled"

export const Nav = styled.nav(
  {
    width: "100%",
    paddingBottom: "env(safe-area-inset-bottom)",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
  })
)

export const List = styled.ul(
  {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    listStyle: "none",
  },
  ({ theme }) => ({
    "&:after": {
      position: "absolute",
      top: 0,
      content: '""',
      width: "100%",
      height: "1px",
      backgroundColor: theme.colors.gray,
    },
  })
)

export const ListItem = styled.li(
  {
    width: "25%",
    color: "#fff",
    fontWeight: "bold",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.small,
  })
)

export const Link = styled.a<{ isActive: boolean }>(
  {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    textDecoration: "none",
    position: "relative",
    padding: "6px 0",
  },
  ({ theme, isActive }) => ({
    fontSize: theme.fontSizes.small,
    opacity: isActive ? 1 : 0.75,
    transition: "background-color , opacity 0.2s ease-in-out",
    "&:before": {
      content: "''",
      width: "100%",
      height: "100%",
      backgroundColor: isActive ? "rgba(120,86,255,0.2)" : "rgba(120,86,255,0)",
      top: "1px",
      display: "inline-block",
      position: "absolute",
      borderRadius: "8px",
    },
  })
)
