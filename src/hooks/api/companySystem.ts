import { useCallback } from "react"
import useSWR from "swr"
import useSWRInfinite from "swr/infinite"

import { CreateCompanySystem } from "~/@types"
import { useFetcher } from "~/hooks/api/fetcher"

import { useBoolean } from "../boolean"

import {
  ApiSuccessCreateCompanySystem,
  ApiSuccessGetCompanySystemLike,
  ApiSuccessGetCompanySystems,
} from "~/@types/api/companySystem"

import { config } from "~/constants/config"

export const useGetCompanySystems = () => {
  const fetcher = useFetcher()
  const { data, error } = useSWR<ApiSuccessGetCompanySystems>(
    "/api/companySystem",
    fetcher
  )
  return {
    data: data?.companySystems,
    isLoading: !error && !data,
  }
}

export const useGetInfinityCompanySystems = () => {
  const fetcher = useFetcher()

  const getKey = (index: number) => {
    return `${config.SITE_URL}/api/companySystem?page=${index}`
  }
  const { data, size, setSize, isValidating, error, mutate } =
    useSWRInfinite<ApiSuccessGetCompanySystems>(getKey, fetcher)
  const result = data
    ?.map((d) => d.companySystems)
    .reduce((prev, current) => [...prev, ...current])
  const max = (data && data[0].count) ?? 0
  const isEnd = ((result && result.length) ?? 9999) >= max
  return {
    data: result ?? [],
    size,
    setSize,
    isValidating,
    isEnd,
    isLoading: !data && !error,
    mutate,
  }
}

export const usePostCompanySystem = () => {
  const fetcher = useFetcher()
  const [isLoading, setLoadingTrue, setLoadingFalse] = useBoolean(false)
  const post = useCallback(
    async (data: CreateCompanySystem) => {
      if (isLoading) return
      setLoadingTrue()
      const res: ApiSuccessCreateCompanySystem = await fetcher(
        "/api/companySystem",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .catch((error) => {
          throw error
        })
        .finally(() => {
          setLoadingFalse()
        })
      return res
    },
    [fetcher, isLoading, setLoadingFalse, setLoadingTrue]
  )

  return {
    post,
    isLoading,
  }
}

export const useGetCompanySystemLike = () => {
  const fetcher = useFetcher()
  const [isLoading, setLoadingTrue, setLoadingFalse] = useBoolean(false)

  const getCompanySystemLike = useCallback(
    async (id, number) => {
      if (isLoading) return
      setLoadingTrue()
      const data: ApiSuccessGetCompanySystemLike = await fetcher(
        `/api/companySystem/${id}/like?number=${number}`
      )
        .catch((error) => {
          throw error
        })
        .finally(() => {
          setLoadingFalse()
        })
      return data
    },
    [fetcher, isLoading, setLoadingFalse, setLoadingTrue]
  )

  return {
    getCompanySystemLike,
    isLoading,
  }
}

export const useGetInfinityCompanySystemRanking = () => {
  const fetcher = useFetcher()

  const getKey = (index: number) => {
    return `${config.SITE_URL}/api/companySystem/ranking?page=${index}`
  }
  const { data, size, setSize, isValidating, error, mutate } =
    useSWRInfinite<ApiSuccessGetCompanySystems>(getKey, fetcher)
  const result = data
    ?.map((d) => d.companySystems)
    .reduce((prev, current) => [...prev, ...current])
  const max = (data && data[0].count) ?? 0
  const isEnd = ((result && result.length) ?? 9999) >= max
  return {
    data: result ?? [],
    size,
    setSize,
    isValidating,
    isEnd,
    isLoading: !data && !error,
    mutate,
  }
}
