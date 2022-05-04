import styled from "@emotion/styled"

import { SpacerProps } from "./index"

export const Spacer = styled.div<SpacerProps>({}, (props) => {
  const { axis, size } = props
  const width = getWidth({ axis, size })
  const height = getHeight({ axis, size })
  return {
    width,
    height,
    minWidth: width,
    minHeight: height,
  }
})

function getWidth({ axis, size }: Pick<SpacerProps, "axis" | "size">): string {
  return axis === "vertical" ? "1px" : `${size}px`
}

function getHeight({ axis, size }: Pick<SpacerProps, "axis" | "size">): string {
  return axis === "horizontal" ? "1px" : `${size}px`
}
