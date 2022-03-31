import React from "react"
import * as Styled from "./index.style"

export type LabelProps = React.ComponentProps<"label"> & {
  label: string
  required?: boolean
}

const Label: React.VFC<LabelProps> = (props) => {
  const { label, required, ...rest } = props
  return (
    <Styled.Label {...rest}>
      {required && <Styled.Required>*</Styled.Required>}
      {label}
    </Styled.Label>
  )
}

export default Label
