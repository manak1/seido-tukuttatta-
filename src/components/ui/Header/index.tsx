import React from "react"
import * as Styled from "./index.style"

type HeaderProps = React.ComponentProps<"header">

const Header: React.VFC<HeaderProps> = (props) => {
  return (
    <Styled.Header {...props}>
      <Styled.Title>制度作ってみたったー</Styled.Title>
    </Styled.Header>
  )
}

export default Header
