import styled from "@emotion/styled"

import Medal from "~/components/ui/Medal"

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

export const Item = styled.li({
  position: "relative",
})

export const RankMedal = styled(Medal)({
  position: "absolute",
  top: "-13px",
  left: "-13px",
})
