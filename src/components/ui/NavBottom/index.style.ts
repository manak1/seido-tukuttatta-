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
  listStyle: "none",
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

export const Link = styled.a<{ isActive: boolean }>(
  {
    width: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    textDecoration: "none",
    padding: "6px 0",
    position: "relative",
  },
  ({ theme, isActive }) => ({
    fontSize: theme.fontSizes.small,
    opacity: isActive ? 1 : 0.75,
    transition: "background-color , opacity 0.2s ease-in-out",
    "&:before": {
      content: "''",
      width: "50px",
      height: "50px",
      borderRadius: "9999px",
      backgroundColor: isActive
        ? "rgba(256,256,256,0.2)"
        : "rgba(256,256,256,0)",
      top: "1px",
      display: "inline-block",
      position: "absolute",
    },
  })
)
