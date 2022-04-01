import React from "react"
import Label from "../Label"
import * as Styled from "./index.style"

type SelectItem = {
  label: string
  value: string
}

export type SelectProps = React.ComponentProps<"select"> & {
  label: string
  items: SelectItem[]
  isOptional?: boolean
}

const Select: React.VFC<SelectProps> = (props) => {
  const { label, items, isOptional, ...rest } = props
  return (
    <Styled.Wrapper>
      <Styled.Box>
        <Label label={label} />
        {isOptional && <Styled.OptionalText>任意</Styled.OptionalText>}
      </Styled.Box>
      <Styled.SelectBox>
        <Styled.Select {...rest}>
          {items &&
            items.map((item) => (
              <Styled.Option key={item.value}>{item.label}</Styled.Option>
            ))}
        </Styled.Select>
        <Styled.Icon />
      </Styled.SelectBox>
    </Styled.Wrapper>
  )
}

export default Select
