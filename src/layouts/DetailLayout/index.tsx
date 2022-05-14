import React from "react"

import Footer from "~/components/ui/Footer"
import HeaderBack from "~/components/ui/HeaderBack"

import * as Styled from "./index.style"

import { navLinks } from "~/constants/navbar"

type DetailLayoutProps = {
  title: string
}

const DetailLayout: React.FC<DetailLayoutProps> = (props) => {
  const { children, title } = props
  return (
    <>
      <HeaderBack title={title} />
      <Styled.ExtendWrapper>{children}</Styled.ExtendWrapper>
      <Footer />
      <Styled.ExtendNavBottom links={navLinks} />
    </>
  )
}

export default DetailLayout
