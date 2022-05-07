import { useCallback } from "react"

export const useFetcher = () => {
  const fetcher = useCallback((url: string, fetchArg?: RequestInit) => {
    return fetch(url, fetchArg).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.json()
        const error = new Error(
          errorData.message ??
            "何らかのエラーが発生しました。しばらくお待ちください。"
        )
        throw error
      }
      return res.json()
    })
  }, [])
  return fetcher
}
