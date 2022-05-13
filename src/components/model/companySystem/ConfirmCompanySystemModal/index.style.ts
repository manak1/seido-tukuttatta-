import styled from "@emotion/styled"

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
})

export const Title = styled.h2({}, ({ theme }) => ({
  fontSize: theme.fontSizes.medium,
  fontWeight: "bold",
  margin: "0 0 12px 0",
}))

export const Message = styled.p({}, ({ theme }) => ({
  margin: 0,
  fontSize: theme.fontSizes.default,
  lineHeight: "1.65",
}))

export const Buttons = styled.div({
  marginTop: "24px",
  "> * + *": {
    marginTop: "16px",
  },
})
