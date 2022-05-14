import { Theme } from "@emotion/react"
import styled from "@emotion/styled"

import { ButtonProps, ButtonSize, ButtonVariant } from "./index"

export const Button = styled.button<Omit<ButtonProps, "label">>(
  {
    minWidth: "36px",
    outline: "none",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  ({ variant, isFullWidth, theme, disabled, size }) => ({
    fontSize: theme.fontSizes.default,
    width: isFullWidth ? "100%" : "auto",
    fontWeight: "bold",
    "&:hover": {
      filter: "brightness(95%)",
      transition: "filter 0.2s ease-out",
    },
    ...setVariant(variant ?? "primary", theme, disabled),
    ...theme.focus(),
    ...setSize(size ?? "default"),
    transition: "box-shadow, filter, 0.2s ease-in",
  })
)

function setVariant(variant: ButtonVariant, theme: Theme, disabled?: boolean) {
  if (disabled) {
    return {
      opacity: 0.7,
      color: "rgba(0, 0, 0, 0.3)",
      backgroundColor: theme.colors.gray,
    }
  }

  switch (variant) {
    case "primary":
      return {
        backgroundColor: theme.colors.primary,
        color: "#fff",
      }
    case "outline": {
      return {
        backgroundColor: theme.colors.white,
        border: `3px solid ${theme.colors.primary}`,
        color: theme.colors.primary,
      }
    }
    case "danger":
      return {
        backgroundColor: theme.colors.error,
        color: "#fff",
      }
    case "cancel":
      return {
        backgroundColor: "#fff",
        color: theme.colors.black,
        border: "1px solid #d3d3d3",
      }
  }
}

function setSize(buttonSize: ButtonSize) {
  switch (buttonSize) {
    case "default":
      return {
        padding: "10px 16px",
      }

    case "small":
      return {
        padding: "8px 16px",
      }
  }
}
