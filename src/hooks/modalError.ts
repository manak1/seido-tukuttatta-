import { useMemo } from "react"
import { useRecoilCallback, useRecoilValue } from "recoil"

import { errorsAtom, errorSelector, ModalError } from "~/store/errorts"

export const useModalError = () => {
  const error = useRecoilValue(errorSelector)

  const getError = useMemo(() => {
    return error
  }, [error])

  const addError = useRecoilCallback(({ set }) => (error: ModalError) => {
    set(errorsAtom, (errors) => [...errors, error])
  })

  const popError = useRecoilCallback(({ set }) => () => {
    set(errorsAtom, (errors) => errors.slice(1))
  })

  return {
    getError,
    addError,
    popError,
  }
}
