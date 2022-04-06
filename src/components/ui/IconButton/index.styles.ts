import styled from "@emotion/styled"
import { IconButtonProps } from "."

export const Button = styled.button<Omit<IconButtonProps, "icon">>(
  {
    width: "56px",
    height: "56px",
    borderRadius: "9999px",
    position: "relative",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
  ({ theme, variant }) => ({
    backgroundColor: theme.colors.primary,
    ...theme.focus(),
    ...setVariant(variant),
  })
)

function setVariant(variant: IconButtonProps["variant"]) {
  switch (variant) {
    case "square":
      return {
        borderRadius: "8px",
      }
  }
}
