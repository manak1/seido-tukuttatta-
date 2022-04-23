import styled from "@emotion/styled"

import IconButton from "~/components/ui/IconButton"
import Wrapper from "~/components/ui/Wrapper"

export const ExtendWrapper = styled(Wrapper)(
  {
    minHeight: "100vh",
  },
  ({ theme }) => ({
    [theme.mq.md]: {
      borderLeft: "1px solid #d3d3d3",
      borderRight: "1px solid #d3d3d3",
    },
  })
)

export const ExtendIconButton = styled(IconButton)({
  position: "absolute",
  right: "5%",
  bottom: "64px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.26)",
})
