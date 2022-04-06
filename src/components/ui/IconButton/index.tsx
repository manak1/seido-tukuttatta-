import React, { useMemo } from "react"
import * as Styled from "./index.styles"
import { EmotionIcon } from "@emotion-icons/emotion-icon"
import styled from "@emotion/styled"

type IconButtonVariants = "square"

export type IconButtonProps = React.ComponentProps<"button"> & {
  icon: EmotionIcon
  variant?: IconButtonVariants
}

const IconButton: React.VFC<IconButtonProps> = (props) => {
  const { icon, ...rest } = props

  const renderIcon = useMemo(() => {
    const StyledIcon = styled(icon)(
      {
        position: "absolute",
        top: "8px",
        left: "8px",
      },
      ({ theme }) => ({ color: theme.colors.white })
    )
    return <StyledIcon width={"40"} height={"40"} role="img" />
  }, [icon])

  return <Styled.Button {...rest}>{renderIcon}</Styled.Button>
}

export default IconButton
