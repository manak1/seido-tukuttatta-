import { Twitter, HandThumbsUpFill, Link } from "@emotion-icons/bootstrap"
import { css } from "@emotion/react"
import React, { useCallback } from "react"

import * as Styled from "./index.style"

const buttonIcons = {
  twitter: Twitter,
  thumbsUp: HandThumbsUpFill,
  link: Link,
}

export type ButtonVariant =
  | "primary"
  | "danger"
  | "cancel"
  | "outline"
  | "twitter"
export type ButtonSize = "default" | "small"
export type ButtonIcon = keyof typeof buttonIcons

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ButtonIcon
  isFullWidth?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = "primary", icon, ...rest } = props

  const renderIcon = useCallback((icon: ButtonIcon) => {
    const IconComponent = buttonIcons[icon]
    return (
      <IconComponent
        size={24}
        css={css`
          margin-right: 8px;
        `}
      />
    )
  }, [])

  return (
    <Styled.Button {...rest} variant={variant} icon={icon}>
      {icon && renderIcon(icon)}
      <Styled.Text>{children}</Styled.Text>
    </Styled.Button>
  )
}

export default Button
