import { useRecoilCallback, useRecoilValue } from "recoil"

import { errorsAtom, errorSelector, ModalError } from "~/store/errorts"

export const useModalError = () => {
  const useGetError = () => {
    const errors = useRecoilValue(errorSelector)
    return errors
  }

  const useAddError = useRecoilCallback(({ set }) => (error: ModalError) => {
    set(errorsAtom, (errors) => [...errors, error])
  })

  const usePopError = useRecoilCallback(({ set }) => () => {
    set(errorsAtom, (errors) => errors.slice(1))
  })

  return {
    useGetError,
    useAddError,
    usePopError,
  }
}
