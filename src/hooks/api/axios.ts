import { useEffect } from "react"

import { client } from "~/libs/axios"

import { useModalError } from "../modalError"

export const useAxios = () => {
  const { addError } = useModalError()

  useEffect(() => {
    const interceptor = client.interceptors.response.use(
      (response) => response,
      (error) => {
        addError(error)
      }
    )
    return () => {
      client.interceptors.response.eject(interceptor)
    }
  }, [addError])

  return client
}
