import { EmotionIcon } from "@emotion-icons/emotion-icon"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react"

import Wrapper from "~/components/ui/Wrapper"

import { theme } from "~/styles/theme"

import * as Styled from "./index.style"

import { navLinks } from "~/constants/navbar"

export type NavItem = {
  label: string
  href: string
  icon: EmotionIcon
}

export type NavBottomProps = React.ComponentProps<"nav"> & {
  links: NavItem[]
}

const NavBottom: React.FC<NavBottomProps> = (props) => {
  const { children, ...rest } = props
  const router = useRouter()

  const isActive = useCallback(
    (href: string) => {
      if (!router) return false
      if (href === "/" && router.pathname !== "/") return false
      return router.pathname.includes(href)
    },
    [router]
  )

  const renderIcon = (navItem: NavItem) => {
    const { label, icon, href } = navItem
    const StyledIcon = styled(icon)({
      color: isActive(href) ? theme.colors.primary : theme.colors.black,
    })
    return <StyledIcon size={"40"} role="img" aria-label={label} />
  }

  return (
    <Styled.Nav {...rest}>
      <Wrapper
        css={css`
          padding: 0;
        `}
      >
        <Styled.List>
          {navLinks &&
            navLinks.map((link) => (
              <Styled.ListItem key={link.label}>
                <Link href={link.href} passHref>
                  <Styled.Link isActive={isActive(link.href)}>
                    {renderIcon(link)}
                  </Styled.Link>
                </Link>
              </Styled.ListItem>
            ))}
        </Styled.List>
        {children}
      </Wrapper>
    </Styled.Nav>
  )
}

export default NavBottom
