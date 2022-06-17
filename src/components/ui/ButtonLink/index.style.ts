import { Theme } from "@emotion/react"
import styled from "@emotion/styled"

import { ButtonLinkProps, ButtonLinkSize, ButtonLinkVariant } from "./index"

export const ButtonLink = styled.a<Omit<ButtonLinkProps, "label">>(
  {
    minWidth: "36px",
    outline: "none",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
  },
  ({ variant, isFullWidth, theme, size, icon }) => ({
    fontSize: theme.fontSizes.default,
    width: isFullWidth ? "100%" : "auto",
    display: icon ? "flex" : "inline-block",
    alignItems: icon ? "center" : "normal",
    justifyContent: "center",
    fontWeight: "bold",
    "&:hover": {
      filter: "brightness(95%)",
      transition: "filter 0.2s ease-out",
    },
    ...setVariant(variant ?? "primary", theme),
    ...theme.focus(),
    ...setSize(size ?? "default"),
    transition: "box-shadow, filter, 0.2s ease-in",
  })
)

export const Text = styled.p({
  margin: "0",
  padding: "0",
})

function setVariant(variant: ButtonLinkVariant, theme: Theme) {
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
    case "twitter":
      return {
        backgroundColor: theme.colors.blue,
        color: theme.colors.white,
      }
  }
}

function setSize(buttonSize: ButtonLinkSize) {
  switch (buttonSize) {
    case "default":
      return {
        padding: "10px 16px",
      }

    case "small":
      return {
        padding: "8px 16px",
      }

    case "oblong":
      return {
        minWidth: "240px",
      }
  }
}
