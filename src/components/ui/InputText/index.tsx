import React, { forwardRef } from "react"
import Label from "../Label"

import * as Styled from "./index.style"

export type InputTextProps = React.ComponentProps<"input"> & {
  name: string
  label: string
  isOptional?: boolean
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
  const { name, label, isOptional, ...rest } = props
  return (
    <Styled.Wrapper>
      <Styled.Box>
        <Label htmlFor={name} label={label} />
        {isOptional && <Styled.OptionalText>任意</Styled.OptionalText>}
      </Styled.Box>
      <Styled.Input id={name} type="text" ref={ref} {...rest} />
    </Styled.Wrapper>
  )
})

InputText.displayName = "InputText"

export default InputText
