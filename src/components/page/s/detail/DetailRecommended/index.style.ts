import styled from "@emotion/styled"

export const Wrapper = styled.div({
  textAlign: "left",
})

export const Link = styled.a(
  {
    display: "block",
    textAlign: "center",
  },
  ({ theme }) => ({
    color: theme.colors.link,
  })
)
