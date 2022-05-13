import Link from "next/link"
import React from "react"

import Wrapper from "~/components/ui/Wrapper"

import * as Styled from "./index.style"

type HeaderProps = React.ComponentProps<"header">

const Header: React.VFC<HeaderProps> = (props) => {
  return (
    <Styled.Header {...props}>
      <Wrapper>
        <Styled.Box>
          <Styled.Logo src="/logo.svg" />
          <Link href="/" passHref>
            <Styled.Link>
              <Styled.Title>制度作ったったー</Styled.Title>
            </Styled.Link>
          </Link>
        </Styled.Box>
      </Wrapper>
    </Styled.Header>
  )
}

export default Header
