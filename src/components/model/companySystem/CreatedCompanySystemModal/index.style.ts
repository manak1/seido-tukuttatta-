import styled from "@emotion/styled"
import { NotificationImportant } from "emotion-icons/material"

export const Target = styled.div({
  position: "absolute",
  top: "-20px",
  left: "50%",
  width: "16px",
  height: "16px",
  transform: "translateX(-50%)",
  backgroundColor: "red",
})

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
})

export const Title = styled.h2({}, ({ theme }) => ({
  fontSize: theme.fontSizes.medium,
  fontWeight: "bold",
  color: theme.colors.primary,
}))

export const Icon = styled(NotificationImportant)({}, ({ theme }) => ({
  fontSize: theme.fontSizes.small,
  color: theme.colors.error,
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
