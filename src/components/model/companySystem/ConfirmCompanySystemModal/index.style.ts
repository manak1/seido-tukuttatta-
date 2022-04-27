import styled from "@emotion/styled"

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
})

export const Title = styled.h2({}, ({ theme }) => ({
  fontSize: theme.fontSizes.medium,
  fontWeight: "bold",
}))

export const Message = styled.p({}, ({ theme }) => ({
  margin: 0,
  fontSize: theme.fontSizes.default,
}))

export const Buttons = styled.div({
  marginTop: "24px",
  "> * + *": {
    marginTop: "16px",
  },
})
