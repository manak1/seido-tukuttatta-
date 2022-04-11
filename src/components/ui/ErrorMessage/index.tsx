import React from "react"

import * as Styled from "./index.styled"

export type ErrorMessageProps = React.ComponentProps<"p">

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { children, ...rest } = props
  return <Styled.Error {...rest}>{children}</Styled.Error>
}

export default ErrorMessage
