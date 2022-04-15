import React, { useMemo, useCallback } from "react"

import ErrorModal from "~/components/ui/ErrorModal"

import { useModalError } from "~/hooks/modalError"

const ErrorModalControl: React.VFC = () => {
  const { getError, popError } = useModalError()

  const getErrorMessage = useMemo(() => {
    return getError && getError.message
  }, [getError])

  const removeError = useCallback(() => {
    popError()
  }, [popError])

  return (
    <ErrorModal
      isOpen={!!getError}
      onClose={removeError}
      message={getErrorMessage}
    />
  )
}

export default ErrorModalControl
