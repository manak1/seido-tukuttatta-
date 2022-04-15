import { useCallback } from "react"
import { useState } from "react"

import { CompanySystem, CreateCompanySystem } from "~/@types"
import { useAxios } from "~/hooks/api/axios"

import { ApiResponseType } from "~/@types/api"

export const usePostCompanySystem = () => {
  const [isLoading, setIsLoading] = useState(false)
  const client = useAxios()

  const post = useCallback(
    async (data: CreateCompanySystem) => {
      if (isLoading) return
      setIsLoading(true)

      const res = await client.post<ApiResponseType<CompanySystem>>(
        "/api/companySystem",
        data
      )
      setIsLoading(false)

      if (res && res.data.success) {
        return res.data.data
      }
    },
    [client, isLoading]
  )

  return {
    post,
    isLoading,
  }
}
