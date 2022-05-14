import Link from "next/link"
import { useRouter } from "next/router"
import React, { useCallback } from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import LoadingContent from "~/components/functional/LoadingContent"
import Spacer from "~/components/functional/Spacer"

import CompanySystemList from "~/components/model/companySystem/CompanySystemList"
import { useGetInfinityCompanySystems } from "~/hooks/api/companySystem"

import * as Styled from "./index.style"

const DetailRecommended: React.FC = () => {
  const { data, size, setSize, isEnd, isLoading, isValidating } =
    useGetInfinityCompanySystems()

  const router = useRouter()

  const jumpToHome = useCallback(() => {
    router.push("/")
  }, [router])

  return (
    <Styled.Wrapper>
      <Title>おすすめの制度</Title>
      <Spacer axis="vertical" size={12} />
      <LoadingContent isLoading={isLoading}>
        <CompanySystemList companySystems={data ?? []} />
      </LoadingContent>
      <Spacer axis="vertical" size={16} />
      <Button isFullWidth variant="outline" size="small" onClick={jumpToHome}>
        制度をつくる
      </Button>
      <Spacer axis="vertical" size={12} />
      <Link href="/" passHref>
        <Styled.Link>トップページに戻る</Styled.Link>
      </Link>
    </Styled.Wrapper>
  )
}

export default DetailRecommended
