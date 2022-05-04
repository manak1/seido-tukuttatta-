import React from "react"

import * as Styled from "./index.style"

export type ButtonVariant = "primary" | "danger" | "cancel" | "outline"
export type ButtonSize = "default" | "small"

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant
  size?: ButtonSize
  isFullWidth?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = "primary", ...rest } = props

  return (
    <Styled.Button {...rest} variant={variant}>
      {children}
    </Styled.Button>
  )
}

export default Button
