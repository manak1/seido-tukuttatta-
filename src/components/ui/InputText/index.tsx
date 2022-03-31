import React from "react"
import Label from "../Label"

import * as Styled from "./index.style"

type InputTextProps = React.ComponentProps<"input"> & {
  name: string
  label: string
  required?: boolean
}

const InputText: React.VFC<InputTextProps> = (props) => {
  const { name, label, required, ...rest } = props
  return (
    <Styled.Wrapper>
      <Label htmlFor={name} label={label} required={required} />
      <Styled.Input id={name} type="text" {...rest} />
    </Styled.Wrapper>
  )
}

export default InputText
