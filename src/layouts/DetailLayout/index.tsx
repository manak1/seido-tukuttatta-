import React from "react"

import HeaderBack from "~/components/ui/HeaderBack"

import * as Styled from "./index.style"

import { navLinks } from "~/constants/navbar"

const DefaultLayout: React.FC = (props) => {
  const { children } = props
  return (
    <>
      <HeaderBack title="新規作成" />
      <Styled.ExtendWrapper>{children}</Styled.ExtendWrapper>
      <Styled.ExtendNavBottom links={navLinks} />
    </>
  )
}

export default DefaultLayout
