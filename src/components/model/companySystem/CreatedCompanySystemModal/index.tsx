import React, { useMemo } from "react"

import Button from "~/components/ui/Button"
import Modal, { ModalProps } from "~/components/ui/Modal"

import { CompanySystem } from "~/@types"

import * as Styled from "./index.style"

export type CreatedCompanySystemModalProps = ModalProps & {
  companySystem: CompanySystem
  onConfirm: () => void
}

const CreatedSystemCompanyModal: React.VFC<CreatedCompanySystemModalProps> = (
  props
) => {
  const { onClose, onConfirm, isOpen, domId, companySystem } = props

  const createMessage = useMemo(() => {
    return `株式会社ぺんぎんにあたらしい制度
    ${companySystem.name} が誕生しました。
   素晴らしい制度の誕生をTwitterで社員の皆さんに知らせててあげてください。`
  }, [companySystem.name])

  return (
    <Modal isOpen={isOpen} onClose={onClose} domId={domId}>
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
