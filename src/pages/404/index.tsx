import { NextPage } from "next"
import React from "react"

import ButtonLink from "~/components/ui/ButtonLink"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import DefaultLayout from "~/layouts/DefaultLayout"

import * as Styled from "./index.style"

const ErrorPage: NextPage = () => {
  return (
    <DefaultLayout>
      <Spacer size={16} />
      <Title fontWeight="bold" size="lg" as="h2">
        404
      </Title>
      <Styled.NotFound>
        お探しのページが見つかりませんでした。
        <br />
        移動もしくは削除された可能性があります。
      </Styled.NotFound>
      <Styled.ImageWrapper>
        <Styled.Penguin src="/hatenapen.svg" />
      </Styled.ImageWrapper>
      <Spacer size={16} />
      <ButtonLink isFullWidth>ホームに戻る</ButtonLink>
    </DefaultLayout>
  )
}

export default ErrorPage
