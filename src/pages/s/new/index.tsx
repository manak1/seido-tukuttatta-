import { NextSeo } from "next-seo"
import { useCallback } from "react"

import Button from "~/components/ui/Button"
import CharacterChat from "~/components/ui/CharacterChat"
import Divider from "~/components/ui/Divider"
import Title from "~/components/ui/Title"

import LoadingContent from "~/components/functional/LoadingContent"
import Spacer from "~/components/functional/Spacer"

import DefaultLayout from "~/layouts/DefaultLayout"

import CompanySystemList from "~/components/model/companySystem/CompanySystemList"
import Cta from "~/components/page/common/Cta"
import { useGetInfinityCompanySystems } from "~/hooks/api/companySystem"

import type { NextPage } from "next"

import { PAGE_TITLE } from "~/constants/seo"

const NewShindanPage: NextPage = () => {
  const { data, isLoading, isEnd, setSize, size } =
    useGetInfinityCompanySystems()

  const loadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  return (
    <DefaultLayout>
      <NextSeo title={`新しい制度 | ${PAGE_TITLE}`} />
      <Spacer axis="vertical" size={12} />
      <Title>#あたらしい制度</Title>
      <Spacer axis="vertical" size={12} />
      <CharacterChat
        name="ぺんぎんシャチョ"
        text={`あたらしく誕生した制度の一覧だよ!!\n面白い制度がいっぱいあるね(｀・ω・´)`}
        icon="/penchan2.svg"
      />
      <Spacer axis="vertical" size={36} />
      <LoadingContent isLoading={isLoading}>
        <CompanySystemList companySystems={data ?? []} />
      </LoadingContent>
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
      <Spacer size={32} />
      <Divider />
      <Cta />
    </DefaultLayout>
  )
}

export default NewShindanPage
