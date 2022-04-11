import React, { forwardRef } from "react"

import Label from "~/components/ui/Label"

import * as Styled from "./index.style"

export type TextAreaProps = React.ComponentProps<"textarea"> & {
  name: string
  label: string
  isOptional?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { name, label, isOptional, ...rest } = props
    return (
      <Styled.Wrapper>
        <Styled.Box>
          <Label label={label} htmlFor={name} />
          {isOptional && <Styled.OptionalText>任意</Styled.OptionalText>}
        </Styled.Box>
        <Styled.TextArea ref={ref} id={name} {...rest} />
      </Styled.Wrapper>
    )
  }
)
TextArea.displayName = "TextArea"

export default TextArea
