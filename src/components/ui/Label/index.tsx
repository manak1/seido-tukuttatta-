import React from "react"

import * as Styled from "./index.style"

export type LabelProps = React.ComponentProps<"label"> & {
  label: string
}

const Label: React.VFC<LabelProps> = (props) => {
  const { label, ...rest } = props
  return <Styled.Label {...rest}>{label}</Styled.Label>
}

export default Label
