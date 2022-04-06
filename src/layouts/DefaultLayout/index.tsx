import React, { useCallback } from "react"
import Header from "~/components/ui/Header"
import Wrapper from "~/components/ui/Wrapper"
import NavBottom from "~/components/ui/NavBottom"
import { css } from "@emotion/react"
import { navLinks } from "~/constants/navbar"
import IconButton from "~/components/ui/IconButton"
import { Add } from "emotion-icons/material"
import { useRouter } from "next/router"

const DefaultLayout: React.FC = (props) => {
  const { children } = props

  const router = useRouter()

  const jumpToCreatePage = useCallback(() => {
    router.push("s/create")
  }, [router])

  return (
    <>
      <Header />
      <Wrapper
        css={css`
          border-left: 1px solid #d3d3d3;
          border-right: 1px solid #d3d3d3;
          min-height: 100vh;
        `}
      >
        {children}
      </Wrapper>
      <NavBottom
        links={navLinks}
        css={css`
          position: fixed;
          left: 0;
          margin: 0;
          bottom: 0;
        `}
      >
        <IconButton
          icon={Add}
          onClick={jumpToCreatePage}
          css={css`
            position: absolute;
            right: 5%;
            bottom: 64px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          `}
        />
      </NavBottom>
    </>
  )
}

export default DefaultLayout
