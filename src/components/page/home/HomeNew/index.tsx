import React from "react"

import ButtonLink from "~/components/ui/ButtonLink"
import Title from "~/components/ui/Title"

import LoadingContent from "~/components/functional/LoadingContent"
import Spacer from "~/components/functional/Spacer"

import CompanySystemList from "~/components/model/companySystem/CompanySystemList"
import { useGetInfinityCompanySystems } from "~/hooks/api/companySystem"

import * as Styled from "./index.style"

const HomeNew: React.FC = () => {
  const { data, isLoading } = useGetInfinityCompanySystems()

  return (
    <Styled.Wrapper>
      <Title>＃新しい制度</Title>
      <Spacer axis="vertical" size={12} />
      <LoadingContent isLoading={isLoading}>
        <CompanySystemList companySystems={data ?? []} />
      </LoadingContent>
      <Spacer axis="vertical" size={16} />
      <ButtonLink isFullWidth variant="outline" size="small" href="/s/new">
        あたらしい制度をもっとみる
      </ButtonLink>
    </Styled.Wrapper>
  )
}

export default HomeNew
