import Link from "next/link"
import { EmotionIcon } from "@emotion-icons/emotion-icon"
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

const NavBottom: React.VFC<NavBottomProps> = (props) => {
  return (
    <Styled.Nav {...props}>
      <Styled.List>
        {navLinks &&
          navLinks.map((link) => (
            <Styled.ListItem key={link.label}>
              <Link href={link.href} passHref>
                <Styled.Link>{link && <link.icon size={"40"} />}</Styled.Link>
              </Link>
            </Styled.ListItem>
          ))}
      </Styled.List>
    </Styled.Nav>
  )
}

export default NavBottom
