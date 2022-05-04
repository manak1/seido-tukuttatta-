import React from "react"

import * as Styled from "./index.style"

type SpacerDirection = "horizontal" | "vertical"

export type SpacerProps = {
  axis?: SpacerDirection
  size: number
} & React.ComponentProps<"div">

const Spacer: React.VFC<SpacerProps> = (props) => {
  return <Styled.Spacer {...props} />
}

export default Spacer
