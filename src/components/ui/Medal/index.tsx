import React from "react"

import * as Styled from "./index.style"

export type MedalVariants = "gold" | "silver" | "bronze"

export type MedalProps = {
  variant: MedalVariants
} & React.ComponentPropsWithRef<"div">

const Medal: React.FC<MedalProps> = (props) => {
  const { variant = "bronze", children, ...rest } = props
  return (
    <Styled.Medal variant={variant} {...rest}>
      {children}
    </Styled.Medal>
  )
}

export default Medal
