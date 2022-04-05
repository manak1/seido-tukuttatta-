import React from "react"
import Link from "next/link"
import * as Styled from "./index.style"

type HeaderProps = React.ComponentProps<"header">

const Header: React.VFC<HeaderProps> = (props) => {
  return (
    <Styled.Header {...props}>
      <Link href="/" passHref>
        <Styled.Link>
          <Styled.Title>制度作ってみたったー</Styled.Title>
        </Styled.Link>
      </Link>
    </Styled.Header>
  )
}

export default Header
