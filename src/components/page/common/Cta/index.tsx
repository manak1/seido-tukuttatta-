import React from "react"

import ButtonLink from "~/components/ui/ButtonLink"

import Spacer from "~/components/functional/Spacer"

import * as Styled from "./index.style"

const Cta: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>あなたの制度おまちしてます</Styled.Title>
      <Styled.ImageWrapper>
        <Styled.Logo src="/penchan.svg" />
      </Styled.ImageWrapper>
      <Spacer size={24} />
      <ButtonLink href="/s/create" size="oblong">
        制度を作る
      </ButtonLink>
    </Styled.Wrapper>
  )
}

export default Cta
