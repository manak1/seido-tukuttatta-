import styled from "@emotion/styled"

import NavBottom from "~/components/ui/NavBottom"
import Wrapper from "~/components/ui/Wrapper"

export const ExtendWrapper = styled(Wrapper)(
  {
    minHeight: "100vh",
    paddingTop: "16px",
    paddingBottom: "136px",
  },
  ({ theme }) => ({
    [theme.mq.md]: {
      borderLeft: "1px solid #d3d3d3",
      borderRight: "1px solid #d3d3d3",
    },
  })
)

export const ExtendNavBottom = styled(NavBottom)({
  position: "fixed",
  left: "50%",
  margin: "0",
  bottom: "0",
  transform: "translate(-50%)",
})
