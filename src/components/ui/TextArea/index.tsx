import React from "react"
import Label from "~/components/ui/Label"
import * as Styled from "./index.style"

type Props = React.ComponentProps<"textarea"> & {
  name: string
  label: string
  isOptional: boolean
}

const TextArea: React.VFC<Props> = (props) => {
  const { name, label, isOptional, ...rest } = props
  return (
    <Styled.Wrapper>
      <Styled.Box>
        <Label label={label} htmlFor={name} />
        {isOptional && <Styled.OptionalText>任意</Styled.OptionalText>}
      </Styled.Box>
      <Styled.TextArea id={name} {...rest} />
    </Styled.Wrapper>
  )
}

export default TextArea
