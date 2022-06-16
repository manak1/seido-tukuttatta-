import {
  Twitter,
  HandThumbsUp,
  HandThumbsUpFill,
} from "@emotion-icons/bootstrap"
import { EmotionIconProps } from "@emotion-icons/emotion-icon"
import { Theme } from "@emotion/react"
import React, { useMemo } from "react"

import * as Styled from "./index.style"

export const ICONS = {
  twitter: Twitter,
  thumbsUp: HandThumbsUp,
  thumbsUpFill: HandThumbsUpFill,
}

export type IconProps = Omit<EmotionIconProps, "color"> & {
  icon: keyof typeof ICONS
  color?: keyof Theme["colors"]
}

const Icon: React.FC<IconProps> = (props) => {
  const { icon, color = "black", ...rest } = props

  const Icon = useMemo(() => {
    const Icon = Styled.Icon(ICONS[icon])
    return <Icon size={24} color={color} {...rest} />
  }, [icon, rest, color])

  return Icon
}

export default Icon
