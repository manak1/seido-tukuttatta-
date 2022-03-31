import styled from "@emotion/styled"
import { LabelProps } from "."

export const Label = styled.label<Omit<LabelProps, "label">>(
  {
    color: "#ddd",
  },
  (props) => ({
    color: props.theme.colors.black,
  })
)
