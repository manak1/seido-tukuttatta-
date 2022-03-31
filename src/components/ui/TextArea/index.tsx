import React from "react"
import Label from "~/components/ui/Label"
import * as Styled from "./index.style"

type Props = React.ComponentProps<"textarea"> & {
  name: string
  label: string
  required?: boolean
}

const TextArea: React.VFC<Props> = (props) => {
  const { name, label, required, ...rest } = props
  return (
    <Styled.Wrapper>
      <Label required={required} label={label} htmlFor={name} />
      <Styled.TextArea id={name} {...rest} />
    </Styled.Wrapper>
  )
}

export default TextArea
