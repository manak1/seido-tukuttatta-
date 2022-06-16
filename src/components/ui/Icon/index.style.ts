import { EmotionIcon } from "@emotion-icons/emotion-icon"
import styled from "@emotion/styled"

import { IconProps } from "."

export const Icon = (icon: EmotionIcon) => {
  return styled(icon)<Pick<IconProps, "color">>(
    ({ theme, color = "black" }) => ({
      color: theme.colors[color],
    })
  )
}
