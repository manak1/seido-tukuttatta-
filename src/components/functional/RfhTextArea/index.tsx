import { FieldValues, useController, UseControllerProps } from "react-hook-form"
import TextArea, { TextAreaProps } from "~/components/ui/TextArea"
import * as Styled from "./index.style"

type RfhInputText<T extends FieldValues> = TextAreaProps & UseControllerProps<T>

const RfhTextArea = <T extends FieldValues>(props: RfhInputText<T>) => {
  const { name, isOptional, label, ...rest } = props
  const {
    field,
    fieldState: { error },
  } = useController(props)

  return (
    <>
      <TextArea
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

export default RfhTextArea
