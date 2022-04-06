import styled from "@emotion/styled"
import { IconButtonProps, IconProps } from "."
import { EmotionIcon } from "@emotion-icons/emotion-icon"

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
  ({ theme, variant, size }) => ({
    backgroundColor: theme.colors.primary,
    ...theme.focus(),
    ...setVariant(variant),
    ...setSize(size),
  })
)

function setVariant(variant: IconButtonProps["variant"]) {
  switch (variant) {
    case "square":
      return {
        borderRadius: "8px",
      }
    case "transparent":
      return {
        backgroundColor: "transparent",
      }
  }
}

function setSize(size: IconButtonProps["size"]) {
  switch (size) {
    case "small":
      return {
        width: "34px",
        height: "34px",
      }
  }
}

export const CreateIcon = (icon: EmotionIcon) => {
  const StyledIcon = styled(icon)<Omit<IconProps, "icon">>(
    {
      position: "absolute",
      top: "8px",
      left: "8px",
    },
    ({ theme, variant, size }) => ({
      color:
        variant === "transparent" ? theme.colors.black : theme.colors.white,
      ...setIconSize(size),
      ...setIconPosition(size),
    })
  )
  return StyledIcon
}

function setIconSize(size: IconProps["size"]) {
  switch (size) {
    case "small":
      return {
        width: "24px",
        height: "24px",
      }
  }
}

function setIconPosition(size: IconProps["size"]) {
  switch (size) {
    case "small":
      return {
        top: "5px",
        left: "5px",
      }
  }
}
