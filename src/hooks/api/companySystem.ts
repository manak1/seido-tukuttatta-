import useSWR from "swr"

import { CompanySystem } from "~/@types"
import { useFetcher } from "~/hooks/api/fetcher"

import { ApiSuccessResponseType } from "~/@types/api"

export const useGetCompanySystem = () => {
  const fetcher = useFetcher()
  const { data, error } = useSWR<
    ApiSuccessResponseType<{ companySystem: CompanySystem[] }>
  >(`/api/companySystem`, fetcher)
  return {
    data: data?.companySystem,
    isLoading: !error && !data,
  }
}
