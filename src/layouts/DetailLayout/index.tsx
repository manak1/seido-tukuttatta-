import React from "react"
import HeaderBack from "~/components/ui/HeaderBack"
import Wrapper from "~/components/ui/Wrapper"
import NavBottom from "~/components/ui/NavBottom"
import { css } from "@emotion/react"
import { navLinks } from "~/constants/navbar"

const DefaultLayout: React.FC = (props) => {
  const { children } = props
  return (
    <>
      <HeaderBack title="新規作成" />
      <Wrapper
        css={css`
          min-height: 100vh;
          padding-bottom: 64px;
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
      />
    </>
  )
}

export default DefaultLayout
