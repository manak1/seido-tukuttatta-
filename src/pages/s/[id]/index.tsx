import { NextPage, GetServerSideProps } from "next"
import Head from "next/head"
import { useEffect, useMemo, useState } from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import DetailLayout from "~/layouts/DetailLayout"

import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"
import DetailRecommended from "~/components/page/s/detail/DetailRecommended"
import { useGetCompanySystemLike } from "~/hooks/api/companySystem"
import { useModalError } from "~/hooks/modalError"

import * as Styled from "./index.style"

import { ApiSuccessGetCompanySystem } from "~/@types/api/companySystem"
import { CompanySystem } from "~/@types/companySystem"

import { config } from "~/constants/config"

type CompanySystemDetailPageProps = {
  companySystem: CompanySystem
}

const CompanySystemDetailPage: NextPage<CompanySystemDetailPageProps> = (
  props
) => {
  const { companySystem } = props

  const { getCompanySystemLike, isLoading } = useGetCompanySystemLike()
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)
  const { addError } = useModalError()

  const systemNumber = useMemo(
    () => String(companySystem.number).padStart(3, "0"),
    [companySystem.number]
  )

  useEffect(() => {
    const init = async () => {
      const data = await getCompanySystemLike(
        companySystem.id,
        companySystem.number
      ).catch((error) => {
        if (error instanceof Error) {
          addError(error)
        }
        return Promise.reject(error)
      })
      if (data) {
        setLiked(data.liked)
        setCount(data.count)
      }
    }
    init()
  }, [])

  return (
    <DetailLayout title="制度詳細">
      <Head>
        <meta
          property="og:image"
          content={`https://seido-tukuttatta.vercel.app/api/companySystem/ogp?name=${companySystem.name}&description=${companySystem.description}&author=${companySystem.author}`}
        />
        <meta
          property="twitter:image"
          content={`https://seido-tukuttatta.vercel.app/api/companySystem/ogp?name=${companySystem.name}&description=${companySystem.description}&author=${companySystem.author}`}
        />
      </Head>
      <Spacer size={4} />
      <CompanySystemThumbnail companySystem={companySystem} />
      <Spacer size={24} />
      <Styled.SystemNumber>No.{systemNumber}</Styled.SystemNumber>
      <Title fontWeight="black" size="md">
        {companySystem.name}
      </Title>
      <Spacer size={8} />
      <Styled.Description>{companySystem.description}</Styled.Description>
      <Spacer size={16} />
      <Styled.Author>作成者 : @{companySystem.author}</Styled.Author>
      <Spacer size={24} />
      <Button variant="twitter" icon="twitter">
        ツイートする
      </Button>
      <Spacer size={16} />
      <Button icon="thumbsUp">ナイス制度 {count}</Button>
      <Spacer size={16} />
      <Styled.Divider />
      <DetailRecommended />
    </DetailLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, res } = context
  const id = query.id
  const response = await fetch(`${config.SITE_URL}/api/companySystem/${id}`)

  const data: ApiSuccessGetCompanySystem = await response.json()
  const { companySystem } = data

  if (!data || (data && !data.companySystem)) {
    return {
      notFound: true,
    }
  }
  res.setHeader("Cache-Control", "public, s-maxage=31536000, immutable")

  return {
    props: {
      companySystem,
    },
  }
}

export default CompanySystemDetailPage
