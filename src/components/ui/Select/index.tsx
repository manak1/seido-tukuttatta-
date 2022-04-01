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
}

const Select: React.VFC<SelectProps> = (props) => {
  const { label, items, ...rest } = props
  return (
    <Styled.Wrapper>
      <Label label={label} />
      <Styled.SelectBox>
        <Styled.Select {...rest}>
          {items.map((item) => (
            <Styled.Option key={item.value}>{item.label}</Styled.Option>
          ))}
        </Styled.Select>
        <Styled.Icon />
      </Styled.SelectBox>
    </Styled.Wrapper>
  )
}

export default Select
