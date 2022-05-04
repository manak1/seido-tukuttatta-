import React from "react"

import Button from "~/components/ui/Button"
import Modal, { ModalProps } from "~/components/ui/Modal"

import * as Styled from "./index.style"

export type CreatedCompanySystemModalProps = ModalProps & {
  onConfirm: () => void
}

const CreatedSystemCompanyModal: React.VFC<CreatedCompanySystemModalProps> = (
  props
) => {
  const { onClose, onConfirm, isOpen, domId } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} domId={domId}>
      <Styled.Title>制度を作成しますか？</Styled.Title>
      <Styled.Message>
        一度作成した制度は編集できません。書き忘れなどはありませんか？不安であれば一度見直してみる事をおすすめします！
      </Styled.Message>
      <Styled.Buttons>
        <Button onClick={onConfirm} isFullWidth>
          制度をつくる
        </Button>
        <Button onClick={onClose} variant="cancel" isFullWidth>
          閉じる
        </Button>
      </Styled.Buttons>
    </Modal>
  )
}

export default CreatedSystemCompanyModal
