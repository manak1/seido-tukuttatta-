import { css } from "@emotion/react"
import { useRouter } from "next/router"
import React, { useCallback } from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import * as Styled from "./index.style"

const HomeTop: React.FC = () => {
  const router = useRouter()
  const jumpToCreate = useCallback(() => {
    router.push("/s/create")
  }, [router])

  return (
    <>
      <Spacer axis="vertical" size={16} />
      <Title
        size="lg"
        as="h1"
        css={css`
          text-align: center;
        `}
      >
        制度作ったったー
      </Title>
      <Styled.Description>
        こんな制度あったらいいな！を叶える事が出来るサイトです。もしかしたら本当に採用されちゃうかも..!?
      </Styled.Description>
      <Button onClick={jumpToCreate} size="small" isFullWidth>
        制度をつくる
      </Button>
      <Spacer size={8} />
      <Button onClick={jumpToCreate} size="small" variant="outline" isFullWidth>
        制度つくったったーとは？
      </Button>
    </>
  )
}

export default HomeTop
