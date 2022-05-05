import useSWR from "swr"
import useSWRInfinite from "swr/infinite"

import { useFetcher } from "~/hooks/api/fetcher"

import { ApiSuccessGetCompanySystems } from "~/@types/api/companySystem"

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

  const { data, size, setSize, isValidating } =
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
  }
}
