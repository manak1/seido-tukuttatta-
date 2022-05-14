import { css } from "@emotion/react"
import { Add } from "emotion-icons/material"
import { useRouter } from "next/router"
import React, { useCallback } from "react"

import Footer from "~/components/ui/Footer"
import Header from "~/components/ui/Header"
import NavBottom from "~/components/ui/NavBottom"

import * as Styled from "./index.style"

import { navLinks } from "~/constants/navbar"

const DefaultLayout: React.FC = (props) => {
  const { children } = props

  const router = useRouter()

  const jumpToCreatePage = useCallback(() => {
    router.push("/s/create")
  }, [router])

  return (
    <>
      <Header />
      <Styled.ExtendWrapper>{children}</Styled.ExtendWrapper>
      <Footer />
      <NavBottom
        links={navLinks}
        css={css`
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          bottom: 0;
        `}
      >
        <Styled.ExtendIconButton icon={Add} onClick={jumpToCreatePage} />
      </NavBottom>
    </>
  )
}

export default DefaultLayout
