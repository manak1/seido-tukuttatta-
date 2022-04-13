import React, { useCallback, useState, useEffect } from "react"
import { createPortal } from "react-dom"

import * as Styled from "./index.style"

export type ModalProps = {
  onClose: () => void
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, isOpen } = props

  const preventEvent = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  return (
    <>
      {isOpen && (
        <Portal>
          <Styled.Overlay onClick={onClose}>
            <Styled.Modal onClick={preventEvent}>{props.children}</Styled.Modal>
          </Styled.Overlay>
        </Portal>
      )}
    </>
  )
}

export default Modal

const Portal: React.FC = (props) => {
  const { children } = props
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return isMounted
    ? createPortal(
        children,
        document.getElementById("modal-portal") as HTMLElement
      )
    : null
}
