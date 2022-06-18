import styled from "@emotion/styled"

export const List = styled.ol({
  padding: "0",
  margin: 0,
  listStyle: "none",
  "> * + *": {
    marginTop: "16px",
  },
})

export const ListItem = styled.li({})
