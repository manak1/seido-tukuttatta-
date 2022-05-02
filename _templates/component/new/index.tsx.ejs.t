---
to: src/components/<%= path %>/<%= name %>/index.tsx
---
import React from "react"

import * as Styled from "./index.style"

export type <%= name %>Props = {}

const <%= name %>:React.VFC<<%= name %>Props> = (props) => {
  return <div><%= name %></div>
}

export default <%= name %>