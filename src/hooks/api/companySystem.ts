import useSWR from "swr"

import { useFetcher } from "~/hooks/api/fetcher"

import { ApiSuccessGetCompanySystems } from "~/@types/api/companySystem"

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
