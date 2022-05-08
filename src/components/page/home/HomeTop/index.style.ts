import styled from "@emotion/styled"

export const Description = styled.p({}, ({ theme }) => ({
  fontSize: theme.fontSizes.small,
  marginTop: "16px",
  lineHeight: 1.7,
}))

export const Image = styled.img({
  width: "100%",
  height: "140px",
  marginTop: "8px",
})
