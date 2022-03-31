import React from "react"
import Label from "../Label"

import * as Styled from "./index.style"

type InputTextProps = React.ComponentProps<"input"> & {
  name: string
  label: string
}

const InputText: React.VFC<InputTextProps> = (props) => {
  const { name, label, ...rest } = props
  return (
    <Styled.Wrapper>
      <Label htmlFor={name} label={label} />
      <Styled.Input id={name} type="text" {...rest} />
    </Styled.Wrapper>
  )
}

export default InputText
