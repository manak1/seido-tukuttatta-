import React from "react"
import Label from "~/components/ui/Label"
import * as Styled from "./index.style"

type Props = React.ComponentProps<"textarea"> & {
  name: string
  label: string
}

const TextArea: React.VFC<Props> = (props) => {
  const { name, label, ...rest } = props
  return (
    <Styled.Wrapper>
      <Label label={label} htmlFor={name} />
      <Styled.TextArea id={name} {...rest} />
    </Styled.Wrapper>
  )
}

export default TextArea
