import { NextPage, GetServerSideProps } from "next"
import Head from "next/head"
import { useMemo } from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import DetailLayout from "~/layouts/DetailLayout"

import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"

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

  const systemNumber = useMemo(
    () => String(companySystem.number).padStart(3, "0"),
    [companySystem.number]
  )

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
      <p>No.{systemNumber}</p>
      <Title>{companySystem.name}</Title>
      <p>制度内容 : {companySystem.description}</p>
      <p>いいね数 : 12</p>
      <Button>制度をシェアする</Button>
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
