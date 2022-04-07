import React from "react"
import { FieldValues, useController, UseControllerProps } from "react-hook-form"
import InputText, { InputTextProps } from "~/components/ui/InputText"
import * as Styled from "./index.style"

type RfhInputText<T extends FieldValues> = InputTextProps &
  UseControllerProps<T>

const RfhInputText = <T extends FieldValues>(props: RfhInputText<T>) => {
  const { name, isOptional, label, ...rest } = props
  const {
    field,
    fieldState: { error },
  } = useController(props)

  return (
    <>
      <InputText
        {...rest}
        {...field}
        name={name}
        isOptional={isOptional}
        label={label}
      />
      <Styled.Error>{error?.message}</Styled.Error>
    </>
  )
}

export default RfhInputText
