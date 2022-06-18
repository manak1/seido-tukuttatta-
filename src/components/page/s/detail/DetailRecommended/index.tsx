import Link from "next/link"
import React from "react"

import ButtonLink from "~/components/ui/ButtonLink"
import Title from "~/components/ui/Title"

import LoadingContent from "~/components/functional/LoadingContent"
import Spacer from "~/components/functional/Spacer"

import { CompanySystem } from "~/@types"
import CompanySystemList from "~/components/model/companySystem/CompanySystemList"

import * as Styled from "./index.style"

type DetailRecommendedProps = {
  companySystem: CompanySystem[]
  isLoading: boolean
}

const DetailRecommended: React.FC<DetailRecommendedProps> = (props) => {
  const { isLoading, companySystem } = props
  return (
    <Styled.Wrapper>
      <Title>#おすすめの制度</Title>
      <Spacer axis="vertical" size={12} />
      <LoadingContent isLoading={isLoading}>
        <CompanySystemList companySystems={companySystem ?? []} />
      </LoadingContent>
      <Spacer axis="vertical" size={32} />
      <ButtonLink isFullWidth variant="outline" size="small" href="/s/create">
        制度をつくる
      </ButtonLink>
      <Spacer axis="vertical" size={16} />
      <Link href="/" passHref>
        <Styled.Link>トップページに戻る</Styled.Link>
      </Link>
    </Styled.Wrapper>
  )
}

export default DetailRecommended
