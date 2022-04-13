import React from "react"

import Modal, { ModalProps } from "~/components/ui/Modal"

import Button from "../Button"
import * as Styled from "./index.style"

type ErrorModal = ModalProps & {
  message: string
}

const ErrorModal: React.VFC<ErrorModal> = (props) => {
  const { onClose, isOpen, domId, message } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} domId={domId}>
      <Styled.Box>
        <Styled.Icon size={36} />
        <Styled.Title>エラーが発生しました。</Styled.Title>
      </Styled.Box>
      <Styled.Message>{message}</Styled.Message>
      <Styled.Buttons>
        <Button onClick={onClose} label="閉じる" variant="cancel" isFullWidth />
      </Styled.Buttons>
    </Modal>
  )
}

export default ErrorModal
