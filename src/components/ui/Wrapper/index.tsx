import React from "react"
import * as Styled from "./index.style"

type WrapperProps = React.ComponentProps<"div">

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children, ...rest } = props
  return <Styled.Wrapper {...rest}>{children}</Styled.Wrapper>
}

export default React.memo(Wrapper)
