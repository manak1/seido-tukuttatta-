import React from "react"

import * as Styled from "./index.style"

export type DividerProps = React.ComponentProps<"hr">

const Divider: React.VFC<DividerProps> = (props) => {
  return <Styled.Divider {...props} />
}

export default Divider
