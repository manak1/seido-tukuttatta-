import React, { useCallback } from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import CompanySystemList from "~/components/model/companySystem/CompanySystemList"
import { useGetInfinityCompanySystems } from "~/hooks/api/companySystem"

import * as Styled from "./index.style"

const HomeNew: React.FC = () => {
  const { data, size, setSize, isEnd } = useGetInfinityCompanySystems()

  const loadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  return (
    <Styled.Wrapper>
      <Title>新しい制度</Title>
      <Spacer axis="vertical" size={12} />
      <CompanySystemList companySystems={data ?? []} />
      <Spacer axis="vertical" size={16} />
      <Button
        isFullWidth
        variant="outline"
        size="small"
        onClick={loadMore}
        disabled={isEnd}
      >
        もっとみる
      </Button>
    </Styled.Wrapper>
  )
}

export default HomeNew
