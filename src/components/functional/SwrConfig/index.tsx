import React, { useCallback } from "react"
import { SWRConfig } from "swr"

import { useModalError } from "~/hooks/modalError"

const SwrConfig: React.FC = (props) => {
  const { children } = props
  const { addError } = useModalError()

  const onError = useCallback(
    (error: any) => {
      addError(error)
    },
    [addError]
  )

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        onError,
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SwrConfig
