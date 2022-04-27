import React, { useEffect, useMemo } from "react"
import { useReward } from "react-rewards"

import Button from "~/components/ui/Button"
import Modal, { ModalProps } from "~/components/ui/Modal"

import { useBoolean } from "~/hooks/boolean"

import * as Styled from "./index.style"

export type CreatedCompanySystemModalProps = ModalProps & {
  companyName: string
  onConfirm: () => void
}

const CreatedSystemCompanyModal: React.VFC<CreatedCompanySystemModalProps> = (
  props
) => {
  const { onClose, onConfirm, isOpen, domId, companyName } = props

  const [rewarded, setRewarded] = useBoolean(false)

  const { reward } = useReward("rewardId", "confetti", {
    lifetime: 1000,
    spread: 60,
    elementCount: 100,
    onAnimationComplete: () => setRewarded(),
  })

  useEffect(() => {
    if (rewarded) return
    reward()
  }, [reward, rewarded])

  const createMessage = useMemo(() => {
    return `株式会社ぺんぎんにあたらしい制度
    ${companyName} が誕生しました。
   素晴らしい制度の誕生をTwitterで皆さんに知らせてあげてください。`
  }, [companyName])

  return (
    <Modal isOpen={isOpen} onClose={onClose} domId={domId}>
      <Styled.Target id="rewardId" />
      <Styled.Title>おめでとうございます！！ </Styled.Title>
      <Styled.Message>{createMessage}</Styled.Message>
      <Styled.Buttons>
        <Button onClick={onConfirm} label="制度を共有する" isFullWidth />
        <Button onClick={onClose} label="閉じる" variant="cancel" isFullWidth />
      </Styled.Buttons>
    </Modal>
  )
}

export default CreatedSystemCompanyModal
