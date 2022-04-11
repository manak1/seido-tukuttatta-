import React from "react"
import { FieldValues, useController, UseControllerProps } from "react-hook-form"
import InputText, { InputTextProps } from "~/components/ui/InputText"
import * as Styled from "./index.style"

type RfhInputText<T extends FieldValues> = InputTextProps &
  UseControllerProps<T>

const RfhInputText = <T extends FieldValues>(props: RfhInputText<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props)

  return (
    <>
      <InputText {...props} {...field} />
      <Styled.Error>{error?.message}</Styled.Error>
    </>
  )
}

export default RfhInputText
