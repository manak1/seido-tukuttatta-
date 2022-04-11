import { useCallback } from "react"
import { useState } from "react"

import { client } from "~/libs/axios"

import { CreateCompanySystem } from "~/@types"

export const usePostCompanySystem = () => {
  const [isLoading, setIsLoading] = useState(false)

  const post = useCallback(
    async (data: CreateCompanySystem) => {
      if (isLoading) return
      setIsLoading(true)

      const res = await client
        .post<CreateCompanySystem>("/api/companySystem", data)
        .catch((e) => {
          throw e
        })
        .finally(() => {
          setIsLoading(false)
        })
      return res.data
    },
    [isLoading]
  )

  return {
    post,
    isLoading,
  }
}
