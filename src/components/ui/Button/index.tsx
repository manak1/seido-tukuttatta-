import React from "react"
import * as Styled from "./index.style"

export type ButtonVariant = "primary" | "danger" | "cancel"

export type ButtonProps = React.ComponentProps<"button"> & {
  label: string
  variant?: ButtonVariant
  isFullWidth?: boolean
}

const Button: React.VFC<ButtonProps> = (props) => {
  const { label, variant, ...rest } = props
  return (
    <Styled.Button {...rest} variant={variant}>
      {label}
    </Styled.Button>
  )
}

Button.defaultProps = {
  variant: "primary",
  isFullWidth: false,
}

export default Button
