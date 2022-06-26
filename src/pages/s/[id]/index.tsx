import { NextPage, GetServerSideProps } from "next"
import { NextSeo } from "next-seo"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useReward } from "react-rewards"

import Button from "~/components/ui/Button"
import ButtonLink from "~/components/ui/ButtonLink"
import IconCheck from "~/components/ui/IconCheck"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import DefaultLayout from "~/layouts/DefaultLayout"

import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"
import DetailRecommended from "~/components/page/s/detail/DetailRecommended"
import {
  useGetCompanySystemLike,
  useGetRandomCompanySystem,
  usePostCompanySystemLike,
} from "~/hooks/api/companySystem"
import { useModalError } from "~/hooks/modalError"
import useCopyToClipboard from "~/hooks/useCopyToClipboard"
import { formatDate } from "~/utils/date"
import { shareCompanySystemUrl } from "~/utils/twitter"

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
  const [, copy] = useCopyToClipboard()

  const { reward } = useReward("likeCheck", "confetti", {
    lifetime: 100,
    spread: 30,
    startVelocity: 20,
  })

  const { reward: copySuccess } = useReward("linkCopy", "emoji", {
    startVelocity: 20,
    spread: 30,
    emoji: ["🔗"],
  })

  const systemNumber = useMemo(
    () => String(companySystem.number).padStart(3, "0"),
    [companySystem.number]
  )

  const clickCopyLink = useCallback(async () => {
    const isCopied = await copy(`${config.SITE_URL}s/${companySystem.id}`)
    isCopied ? copySuccess() : alert("リンクのコピーに失敗しました(´・ω・`)")
  }, [companySystem.id, copy, copySuccess])

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
    <DefaultLayout>
      <Spacer size={16} />
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
      <CompanySystemThumbnail id="detail" companySystem={companySystem} />
      <Spacer size={24} />
      <Styled.SystemNumber>No.{systemNumber}</Styled.SystemNumber>
      <Title fontWeight="black" size="md">
        {companySystem.name}
      </Title>
      <Spacer size={8} />
      <Styled.Description>{companySystem.description}</Styled.Description>
      <Spacer size={32} />
      <Styled.CreatedDate>
        作成日 : {formatDate(companySystem.createdAt)}
      </Styled.CreatedDate>
      <Spacer size={4} />
      <Styled.Author>作成者 : @{companySystem.author}</Styled.Author>
      <Styled.Share>
        <ButtonLink
          href={shareCompanySystemUrl(
            companySystem.name,
            `${config.SITE_URL}s/${companySystem.id}`
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
      <Spacer size={4} />
      <Button icon="link" isFullWidth id="linkCopy" onClick={clickCopyLink}>
        リンクをコピーする
      </Button>
      <Spacer size={16} />
      <Styled.Divider />
      <Spacer size={8} />
      <DetailRecommended
        isLoading={isLoadingRandomSystem}
        companySystem={randomCompanySystems}
      />
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
