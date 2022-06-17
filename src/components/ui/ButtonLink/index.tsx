import { Twitter, HandThumbsUpFill } from "@emotion-icons/bootstrap"
import { css } from "@emotion/react"
import Link from "next/link"
import React, { useCallback } from "react"

import * as Styled from "./index.style"

const buttonIcons = {
  twitter: Twitter,
  thumbsUp: HandThumbsUpFill,
}

export type ButtonLinkVariant =
  | "primary"
  | "danger"
  | "cancel"
  | "outline"
  | "twitter"
export type ButtonLinkSize = "default" | "small" | "oblong"
export type ButtonLinkIcon = keyof typeof buttonIcons

export type ButtonLinkProps = React.ComponentProps<"a"> & {
  variant?: ButtonLinkVariant
  size?: ButtonLinkSize
  icon?: ButtonLinkIcon
  isFullWidth?: boolean
}

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { children, variant = "primary", icon, href = "/", ...rest } = props

  const renderIcon = useCallback((icon: ButtonLinkIcon) => {
    const IconComponent = buttonIcons[icon]
    return (
      <IconComponent
        size={24}
        css={css`
          margin-right: 8px;
        `}
      />
    )
  }, [])

  return (
    <Link passHref href={href}>
      <Styled.ButtonLink {...rest} variant={variant} icon={icon}>
        {icon && renderIcon(icon)}
        <Styled.Text>{children}</Styled.Text>
      </Styled.ButtonLink>
    </Link>
  )
}

export default ButtonLink
