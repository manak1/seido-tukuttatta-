import Link from "next/link"
import React from "react"

import Wrapper from "~/components/ui/Wrapper"

import * as Styled from "./index.style"

type HeaderProps = React.ComponentProps<"header">

const Header: React.VFC<HeaderProps> = (props) => {
  return (
    <Styled.Header {...props}>
      <Wrapper>
        <Link href="/" passHref>
          <Styled.Link>
            <Styled.Title>制度作ってみたったー</Styled.Title>
          </Styled.Link>
        </Link>
      </Wrapper>
    </Styled.Header>
  )
}

export default Header
