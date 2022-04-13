import { AxiosError } from "axios"
import { atom, selector } from "recoil"

export type ModalError = Error | AxiosError

export const errorsAtom = atom<ModalError[]>({
  key: "errors/atom",
  default: [],
})

export const errorSelector = selector<ModalError>({
  key: "errors/selector",
  get: ({ get }) => {
    const errors = get(errorsAtom)
    return errors && errors[0]
  },
})
