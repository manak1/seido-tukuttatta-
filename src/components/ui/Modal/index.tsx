import disableScroll from "disable-scroll"
import React, { useCallback, useState, useEffect } from "react"
import { createPortal } from "react-dom"

import * as Styled from "./index.style"

export type ModalProps = {
  onClose: () => void
  isOpen: boolean
  domId?: string
}

const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, isOpen, domId } = props

  const preventEvent = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  useEffect(() => {
    isOpen ? disableScroll.on() : disableScroll.off()
    return () => {
      disableScroll.off()
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <Portal domId={domId}>
          <Styled.Overlay onClick={onClose}>
            <Styled.Modal onClick={preventEvent}>{props.children}</Styled.Modal>
          </Styled.Overlay>
        </Portal>
      )}
    </>
  )
}

export default Modal

type PortalProps = {
  domId?: string
}

const Portal: React.FC<PortalProps> = (props) => {
  const { children, domId } = props
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return isMounted
    ? createPortal(
        children,
        document.getElementById(domId ?? "modal-portal") as HTMLElement
      )
    : null
}
