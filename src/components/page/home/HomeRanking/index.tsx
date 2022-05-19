import React, { useCallback } from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import LoadingContent from "~/components/functional/LoadingContent"
import Spacer from "~/components/functional/Spacer"

import CompanySystemRanking from "~/components/model/companySystem/CompanySystemRanking"
import { useGetInfinityCompanySystemRanking } from "~/hooks/api/companySystem"

import * as Styled from "./index.style"

const HomeNew: React.FC = () => {
  const { data, size, setSize, isEnd, isLoading, isValidating } =
    useGetInfinityCompanySystemRanking()

  const loadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  return (
    <Styled.Wrapper>
      <Title>#人気の制度</Title>
      <Spacer axis="vertical" size={12} />
      <LoadingContent isLoading={isLoading}>
        <CompanySystemRanking companySystems={data ?? []} />
      </LoadingContent>
      <Spacer axis="vertical" size={16} />
      <Button
        isFullWidth
        variant="outline"
        size="small"
        onClick={loadMore}
        disabled={isEnd || isValidating}
      >
        もっとみる
      </Button>
    </Styled.Wrapper>
  )
}

export default HomeNew
