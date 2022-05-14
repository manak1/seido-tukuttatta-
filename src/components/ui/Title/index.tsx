import React, { useMemo } from "react"

import * as Styled from "./index.style"

export type TitleSizes = "sm" | "default" | "md" | "lg"
export type TitleTags = "h1" | "h2" | "h3" | "p"
export type TitleBold = "bold" | "black"

export type TitleProps = {
  size?: TitleSizes
  as?: TitleTags
  fontWeight?: TitleBold
} & React.ComponentProps<TitleTags>

const Title: React.FC<TitleProps> = (props) => {
  const {
    size = "default",
    as = "p",
    fontWeight = "bold",
    children,
    ...rest
  } = props

  const StyledTitle = useMemo(() => Styled.createTitleStyle(as), [as])

  return (
    <StyledTitle as={as} size={size} fontWeight={fontWeight} {...rest}>
      {children}
    </StyledTitle>
  )
}

export default Title
