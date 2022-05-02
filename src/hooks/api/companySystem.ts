import { useCallback } from "react"

import { CompanySystem, CreateCompanySystem } from "~/@types"
import { useAxios } from "~/hooks/api/axios"
import { useBoolean } from "~/hooks/boolean"

import { ApiResponseType } from "~/@types/api"

export const useGetCompanySystemList = () => {
  const [isLoading, setLoadingTrue, setLoadingFalse] = useBoolean(false)
  const client = useAxios()

  const get = useCallback(async () => {
    if (isLoading) return
    setLoadingTrue()
    const res = await client.get<ApiResponseType<CompanySystem[]>>(
      "/api/companySystem"
    )
    setLoadingFalse()
    if (res && res.data.success) {
      return res.data
    }
  }, [client, isLoading, setLoadingFalse, setLoadingTrue])

  return {
    get,
    isLoading,
  }
}

export const usePostCompanySystem = () => {
  const [isLoading, setLoadingTrue, setLoadingFalse] = useBoolean(false)
  const client = useAxios()

  const post = useCallback(
    async (data: CreateCompanySystem) => {
      if (isLoading) return
      setLoadingTrue()
      const res = await client.post<ApiResponseType<CompanySystem>>(
        "/api/companySystem",
        data
      )
      setLoadingFalse()
      if (res && res.data.success) {
        return res.data.data
      }
    },
    [client, isLoading, setLoadingFalse, setLoadingTrue]
  )

  return {
    post,
    isLoading,
  }
}
