import { EmotionIcon } from "@emotion-icons/emotion-icon"
import React, { useMemo } from "react"

import * as Styled from "./index.styles"

type IconButtonVariants = "square" | "transparent"
type IconButtonSizez = "small"

export type IconButtonProps = React.ComponentProps<"button"> & {
  icon: EmotionIcon
  variant?: IconButtonVariants
  size?: IconButtonSizez
}

const IconButton: React.VFC<IconButtonProps> = (props) => {
  const { icon, ...rest } = props
  return (
    <Styled.Button {...rest}>
      <Icon size={props.size} icon={icon} variant={props.variant} />
    </Styled.Button>
  )
}

export default IconButton

export type IconProps = {
  icon: EmotionIcon
  variant?: IconButtonVariants
  size?: IconButtonSizez
}

const Icon: React.VFC<IconProps> = (props) => {
  const { icon, size, variant } = props

  const StyledIcon = Styled.CreateIcon(icon)
  const setSize = useMemo(() => {
    if (size === "small") return "20px"
    return "40px"
  }, [size])

  return (
    <StyledIcon
      variant={variant}
      size={size}
      width={setSize}
      height={setSize}
    />
  )
}
