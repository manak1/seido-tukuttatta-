import Link from "next/link"
import { EmotionIcon } from "@emotion-icons/emotion-icon"
import * as Styled from "./index.style"

import { navLinks } from "~/constants/navbar"
import { useRouter } from "next/router"
import { useCallback } from "react"

export type NavItem = {
  label: string
  href: string
  icon: EmotionIcon
}

export type NavBottomProps = React.ComponentProps<"nav"> & {
  links: NavItem[]
}

const NavBottom: React.VFC<NavBottomProps> = (props) => {
  const router = useRouter()

  const isActive = useCallback(
    (href: string) => {
      if (!router) return false
      if (href === "/" && router.pathname !== "/") return false
      return router.pathname.includes(href)
    },
    [router]
  )

  return (
    <Styled.Nav {...props}>
      <Styled.List>
        {navLinks &&
          navLinks.map((link) => (
            <Styled.ListItem key={link.label}>
              <Link href={link.href} passHref>
                <Styled.Link isActive={isActive(link.href)}>
                  {<link.icon size={"40"} role="img" />}
                </Styled.Link>
              </Link>
            </Styled.ListItem>
          ))}
      </Styled.List>
    </Styled.Nav>
  )
}

export default NavBottom
