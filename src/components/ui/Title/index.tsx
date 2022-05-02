import React, { useMemo } from "react"

import * as Styled from "./index.style"

export type TitleSizes = "sm" | "default" | "md" | "lg"
export type TitleTags = "h1" | "h2" | "h3" | "p"

export type TitleProps = {
  size?: TitleSizes
  as?: TitleTags
} & React.ComponentProps<TitleTags>

const Title: React.FC<TitleProps> = (props) => {
  const { size = "default", as = "p", children, ...rest } = props

  const StyledTitle = useMemo(() => Styled.createTitleStyle(as), [as])

  return (
    <StyledTitle as={as} size={size} {...rest}>
      {children}
    </StyledTitle>
  )
}

export default Title
