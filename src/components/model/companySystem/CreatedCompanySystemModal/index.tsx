import React, { useEffect, useMemo } from "react"
import { useReward } from "react-rewards"

import Button from "~/components/ui/Button"
import ButtonLink from "~/components/ui/ButtonLink"
import Modal, { ModalProps } from "~/components/ui/Modal"

import { createdCompanySystemUrl } from "~/utils/twitter"

import * as Styled from "./index.style"

import { config } from "~/constants/config"

export type CreatedCompanySystemModalProps = ModalProps & {
  id: string
  companyName: string
  onConfirm: () => void
}

const CreatedSystemCompanyModal: React.VFC<CreatedCompanySystemModalProps> = (
  props
) => {
  const { onClose, id, isOpen, domId, companyName } = props

  const { reward } = useReward("created-system", "confetti", {
    lifetime: 300,
    spread: 60,
    elementCount: 80,
    startVelocity: 70,
  })

  useEffect(() => {
    reward()
  }, [])

  const createMessage = useMemo(() => {
    return `株式会社ぺんぎんにあたらしい制度
    「${companyName}」 が誕生しました。
   素晴らしい制度の誕生をTwitterで皆さんに知らせてあげてください。`
  }, [companyName])

  return (
    <Modal isOpen={isOpen} onClose={onClose} domId={domId}>
      <Styled.Target id="rewardId" />
      <Styled.Title>おめでとうございます！！ </Styled.Title>
      <Styled.Message>{createMessage}</Styled.Message>
      <Styled.Buttons>
        <ButtonLink
          isFullWidth
          href={createdCompanySystemUrl(
            companyName,
            `${config.SITE_URL}s/${id}`
          )}
        >
          制度を共有する
        </ButtonLink>
        <Button onClick={onClose} variant="cancel" isFullWidth>
          閉じる
        </Button>
      </Styled.Buttons>
    </Modal>
  )
}

export default CreatedSystemCompanyModal
