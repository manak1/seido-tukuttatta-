import { useCallback } from "react"

import Button from "~/components/ui/Button"
import CharacterChat from "~/components/ui/CharacterChat"
import Divider from "~/components/ui/Divider"
import Title from "~/components/ui/Title"

import LoadingContent from "~/components/functional/LoadingContent"
import Spacer from "~/components/functional/Spacer"

import DefaultLayout from "~/layouts/DefaultLayout"

import CompanySystemRanking from "~/components/model/companySystem/CompanySystemRanking"
import Cta from "~/components/page/common/Cta"
import { useGetInfinityCompanySystemRanking } from "~/hooks/api/companySystem"

import type { NextPage } from "next"

const Home: NextPage = () => {
  const { data, isLoading, isEnd, setSize, size } =
    useGetInfinityCompanySystemRanking()

  const loadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  return (
    <DefaultLayout>
      <Spacer axis="vertical" size={12} />
      <Title>#ランキング</Title>
      <Spacer axis="vertical" size={12} />
      <CharacterChat
        name="ひつじ社員"
        text={`人気の制度の一覧だよ！!\n便利そうな制度がいっぱいあって\n楽しそうだね(｀・ω・´)`}
        icon="/sheep.svg"
      />
      <Spacer axis="vertical" size={36} />
      <LoadingContent isLoading={isLoading}>
        <CompanySystemRanking companySystems={data ?? []} />
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

export default Home
