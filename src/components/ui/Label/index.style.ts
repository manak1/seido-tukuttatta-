import styled from "@emotion/styled"
import { LabelProps } from "."

export const Label = styled.label<Omit<LabelProps, "label">>(
  {
    fontWeight: "bold",
    color: "#ddd",
  },
  (props) => ({
    color: props.theme.colors.black,
    fontSize: props.theme.fontSizes.small,
  })
)
