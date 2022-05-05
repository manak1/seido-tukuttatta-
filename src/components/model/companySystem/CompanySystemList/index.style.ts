import styled from "@emotion/styled"

export const List = styled.ul({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  listStyle: "none",
  margin: 0,
  padding: 0,
})

export const Link = styled.a(
  {
    textDecoration: "none",
  },
  ({ theme }) => ({
    color: theme.colors.black,
  })
)

export const Item = styled.li({})
