import React, { useMemo, useCallback } from "react"

import ErrorModal from "~/components/ui/ErrorModal"

import { useModalError } from "~/hooks/modalError"

type ErrorModalControlProps = {
  domId?: string
}

const ErrorModalControl: React.VFC<ErrorModalControlProps> = (props) => {
  const { domId } = props
  const { getError, popError } = useModalError()

  const getErrorMessage = useMemo(() => {
    return getError && getError.message
  }, [getError])

  const removeError = useCallback(() => {
    popError()
  }, [popError])

  return (
    <ErrorModal
      domId={domId}
      isOpen={!!getError}
      onClose={removeError}
      message={getErrorMessage}
    />
  )
}

export default ErrorModalControl
