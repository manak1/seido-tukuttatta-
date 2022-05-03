import { useCallback } from "react"

export const useFetcher = () => {
  const fetcher = useCallback((url: string, fetchArg?: RequestInit) => {
    return fetch(url, fetchArg).then((res) => res.json())
  }, [])
  return fetcher
}
