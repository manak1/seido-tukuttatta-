import Link from "next/link"
import React from "react"

import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import * as Styled from "./index.style"

export type FooterProps = React.ComponentPropsWithoutRef<"footer">

import { footerLinks } from "~/constants/footer"

const Footer: React.VFC<FooterProps> = (props) => {
  return (
    <Styled.Footer {...props}>
      <Styled.Box>
        <Styled.Logo src="/logo.svg" />
        <Title>制度つくったったー</Title>
      </Styled.Box>
      <Spacer size={8} />
      <Styled.List>
        {footerLinks.map((link) => (
          <Styled.Item key={link.title}>
            <Link href={link.href} passHref>
              <Styled.Link>{link.title}</Styled.Link>
            </Link>
          </Styled.Item>
        ))}
      </Styled.List>
      <Spacer size={16} />
      <Styled.Box>
        <Styled.Author>開発&運営</Styled.Author>
        <Styled.TwitterLink>@mikeanakida</Styled.TwitterLink>
      </Styled.Box>
    </Styled.Footer>
  )
}

export default Footer
