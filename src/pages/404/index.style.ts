import styled from "@emotion/styled"

export const NotFound = styled.p(
  {
    lineHeight: 2,
    margin: "8px 0 0 0",
  },
  ({ theme }) => ({
    color: theme.colors.black,
  })
)

export const ImageWrapper = styled.div({
  textAlign: "center",
})

export const Penguin = styled.img({
  marginTop: "16px",
  width: "160px",
  height: "160px",
})
