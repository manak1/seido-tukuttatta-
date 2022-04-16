import { useCallback, useEffect, useState } from "react"

export const useBodyLock = () => {
  const [isLocked, setIsLocked] = useState(false)

  const lockBody = useCallback(() => {
    setIsLocked(true)
  }, [])

  const unLockBody = useCallback(() => {
    setIsLocked(false)
  }, [])

  useEffect(() => {
    if (!isLocked) return

    const originalOverflow = document.body.style.overflow
    const originalDisplay = document.body.style.display

    document.body.style.overflow = "hidden"
    document.body.style.display = "fixed"

    return () => {
      document.body.style.overflow = originalOverflow ?? "scroll"
      document.body.style.display = originalDisplay
    }
  }, [isLocked])

  return {
    lockBody,
    unLockBody,
  }
}
