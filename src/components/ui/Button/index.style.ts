import { Theme } from "@emotion/react"
import styled from "@emotion/styled"

import { ButtonProps, ButtonVariant } from "./index"

export const Button = styled.button<Omit<ButtonProps, "label">>(
  {
    minWidth: "36px",
    outline: "none",
    padding: "8px 16px",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
  },
  ({ variant, isFullWidth, theme, disabled }) => ({
    fontSize: theme.fontSizes.default,
    width: isFullWidth ? "100%" : "auto",
    fontWeight: "bold",
    "&:hover": {
      filter: "brightness(95%)",
      transition: "filter 0.2s ease-out",
    },
    ...setVariant(variant ?? "primary", theme, disabled),
    ...theme.focus(),
    transition: "box-shadow, filter, 0.2s ease-in",
  })
)

function setVariant(variant: ButtonVariant, theme: Theme, disabled?: boolean) {
  if (disabled) {
    return {
      opacity: 0.7,
      color: "rgba(0, 0, 0, 0.3)",
      backgroundColor: theme.colors.gray,
      pointerEvent: "none",
    }
  }

  switch (variant) {
    case "primary":
      return {
        backgroundColor: theme.colors.primary,
        color: "#fff",
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
