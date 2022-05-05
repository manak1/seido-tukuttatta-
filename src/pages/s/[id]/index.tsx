import { NextPage, GetServerSideProps } from "next"
import { useMemo } from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import DefaultLayout from "~/layouts/DefaultLayout"

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
    <DefaultLayout>
      <CompanySystemThumbnail companySystem={companySystem} />
      <p>No.{systemNumber}</p>
      <Title>{companySystem.name}</Title>
      <p>制度内容 : {companySystem.description}</p>
      <p>いいね数 : 12</p>
      <Button>制度をシェアする</Button>
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, res } = context
  const id = query.id
  const response = await fetch(`${config.SITE_URL}/api/companySystem/${id}`)

  const data: ApiSuccessGetCompanySystem = await response.json()
  const { companySystem } = data

  if (!data || (data && !data.companySystem)) {
    throw data
    return {
      notFound: true,
    }
  }
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  )

  return {
    props: {
      companySystem,
    },
  }
}

export default CompanySystemDetailPage
