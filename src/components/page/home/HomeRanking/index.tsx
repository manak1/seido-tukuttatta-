import React, { useCallback } from "react"

import ButtonLink from "~/components/ui/ButtonLink"
import Title from "~/components/ui/Title"

import LoadingContent from "~/components/functional/LoadingContent"
import Spacer from "~/components/functional/Spacer"

import CompanySystemRanking from "~/components/model/companySystem/CompanySystemRanking"
import { useGetInfinityCompanySystemRanking } from "~/hooks/api/companySystem"

import * as Styled from "./index.style"

const HomeNew: React.FC = () => {
  const { data, isLoading } = useGetInfinityCompanySystemRanking()

  return (
    <Styled.Wrapper>
      <Title>#人気の制度</Title>
      <Spacer axis="vertical" size={12} />
      <LoadingContent isLoading={isLoading}>
        <CompanySystemRanking companySystems={data ?? []} />
      </LoadingContent>
      <Spacer axis="vertical" size={16} />
      <ButtonLink isFullWidth href="/s/ranking">
        ランキングを見る
      </ButtonLink>
    </Styled.Wrapper>
  )
}

export default HomeNew
