import { NextPage, GetServerSideProps } from "next"
import { NextSeo } from "next-seo"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useReward } from "react-rewards"

import ButtonLink from "~/components/ui/ButtonLink"
import IconCheck from "~/components/ui/IconCheck"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import DetailLayout from "~/layouts/DetailLayout"

import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"
import DetailRecommended from "~/components/page/s/detail/DetailRecommended"
import {
  useGetCompanySystemLike,
  useGetRandomCompanySystem,
  usePostCompanySystemLike,
} from "~/hooks/api/companySystem"
import { useModalError } from "~/hooks/modalError"
import { createTwitterShareUrl } from "~/utils/twitter"

import * as Styled from "./index.style"

import { ApiSuccessGetCompanySystem } from "~/@types/api/companySystem"
import { CompanySystem } from "~/@types/companySystem"

import { config } from "~/constants/config"
import { PAGE_TITLE } from "~/constants/seo"

type CompanySystemDetailPageProps = {
  companySystem: CompanySystem
}

const CompanySystemDetailPage: NextPage<CompanySystemDetailPageProps> = (
  props
) => {
  const { companySystem } = props

  const { getCompanySystemLike, isLoading } = useGetCompanySystemLike()
  const { postCompanySystemlike, isLoading: isLoadingPostLike } =
    usePostCompanySystemLike()

  const { getRandomCompanySystem, isLoading: isLoadingRandomSystem } =
    useGetRandomCompanySystem()
  const [randomCompanySystems, setRandomCompanySystems] = useState<
    CompanySystem[]
  >([])
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)
  const { addError } = useModalError()

  const { reward } = useReward("likeCheck", "confetti", {
    lifetime: 100,
    spread: 30,
    startVelocity: 20,
  })

  const systemNumber = useMemo(
    () => String(companySystem.number).padStart(3, "0"),
    [companySystem.number]
  )

  useEffect(() => {
    const init = async () => {
      const likeData = getCompanySystemLike(
        companySystem.id,
        companySystem.number
      )
      const randomSysytem = getRandomCompanySystem()
      const results = await Promise.all([likeData, randomSysytem]).catch(
        (error) => {
          if (error instanceof Error) {
            addError(error)
          }
          return Promise.reject(error)
        }
      )

      const likeResponse = results[0]
      if (likeResponse) {
        setLiked(likeResponse.liked)
        setCount(likeResponse.count)
      }

      const randomCompanySystemResponse = results[1]
      if (randomCompanySystemResponse) {
        setRandomCompanySystems(randomCompanySystemResponse.companySystems)
      }
    }
    init()
  }, [])

  // この辺hookにすると良さそう
  const updateLiked = () => {
    reward()
    setCount((prev) => prev + 1)
    setLiked(true)
  }

  const updateDisliked = () => {
    setCount((prev) => prev - 1)
    setLiked(false)
  }

  const handleLike = useCallback(
    (liked: boolean) => {
      if (isLoadingPostLike) return
      liked ? updateLiked() : updateDisliked()
      postCompanySystemlike(companySystem.id, companySystem.number)
    },
    [
      companySystem.id,
      companySystem.number,
      isLoadingPostLike,
      postCompanySystemlike,
    ]
  )

  return (
    <DetailLayout title="制度詳細">
      <NextSeo
        title={`${companySystem.name} | ${PAGE_TITLE}`}
        description={companySystem.description}
        openGraph={{
          description: companySystem.description,
          url: `https://seido-tukuttatta.vercel/s/${companySystem.id}`,
          images: [
            {
              url: `https://seido-tukuttatta.vercel.app/api/companySystem/ogp?name=${companySystem.name}&description=${companySystem.description}&author=${companySystem.author}`,
              width: 654,
              height: 356,
              type: "image/png",
            },
          ],
          title: `${companySystem.name} | ${PAGE_TITLE}`,
        }}
      />
      <Spacer size={4} />
      <CompanySystemThumbnail companySystem={companySystem} />
      <Spacer size={24} />
      <Styled.SystemNumber>No.{systemNumber}</Styled.SystemNumber>
      <Title fontWeight="black" size="md">
        {companySystem.name}
      </Title>
      <Spacer size={8} />
      <Styled.Description>{companySystem.description}</Styled.Description>
      <Spacer size={32} />
      <Styled.Author>作成者 : @{companySystem.author}</Styled.Author>
      <Styled.Share>
        <ButtonLink
          href={createTwitterShareUrl(
            "りんご食べ放題制度",
            "https://seido-tukuttatta.vercel.app/s/31ba67b6-a366-43ab-b2b4-a58e415d9d5c"
          )}
          variant="twitter"
          icon="twitter"
        >
          ツイートする
        </ButtonLink>
        <IconCheck
          disabled={isLoading || isLoadingPostLike}
          value={liked}
          onChange={handleLike}
          icon="thumbsUp"
          id="likeCheck"
        >
          {count}
        </IconCheck>
      </Styled.Share>
      <Spacer size={16} />
      <Styled.Divider />
      <Spacer size={8} />
      <DetailRecommended
        isLoading={isLoadingRandomSystem}
        companySystem={randomCompanySystems}
      />
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
