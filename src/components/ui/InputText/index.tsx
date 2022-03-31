import React from "react"
import Label from "../Label"

import * as Styled from "./index.style"

type InputTextProps = React.ComponentProps<"input"> & {
  name: string
  label: string
  isOptional?: boolean
}

const InputText: React.VFC<InputTextProps> = (props) => {
  const { name, label, isOptional, ...rest } = props
  return (
    <Styled.Wrapper>
      <Styled.Box>
        <Label htmlFor={name} label={label} />
        {isOptional && <Styled.OptionalText>任意</Styled.OptionalText>}
      </Styled.Box>
      <Styled.Input id={name} type="text" {...rest} />
    </Styled.Wrapper>
  )
}

export default InputText
