import styled from "@emotion/styled"

export const Description = styled.p({}, ({ theme }) => ({
  fontSize: theme.fontSizes.small,
  marginTop: "24px",
  lineHeight: 1.75,
  fontWeight: "500",
}))

export const Image = styled.img({
  width: "100%",
  height: "140px",
  marginTop: "8px",
})
