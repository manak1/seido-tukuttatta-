import React from "react"
import { FieldValues, useController, UseControllerProps } from "react-hook-form"
import Select, { SelectProps } from "~/components/ui/Select"
import * as Styled from "./index.style"

type RfhSelectProps<T extends FieldValues> = SelectProps & UseControllerProps<T>

const RfhSelect = <T extends FieldValues>(props: RfhSelectProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props)
  return (
    <>
      <Select {...props} {...field} />
      <Styled.Error>{error?.message}</Styled.Error>
    </>
  )
}

export default RfhSelect
