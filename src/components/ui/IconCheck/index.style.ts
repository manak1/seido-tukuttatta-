import styled from "@emotion/styled"

import { IconCheckProps } from "."

export const Wrapper = styled.label(
  {
    display: "inline-block",
    borderRadius: "9999px",
    padding: "8px",
    cursor: "pointer",
  },
  ({ theme }) => ({})
)

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
})

export const CheckBox = styled.input({
  display: "none",
})

export const Text = styled.p<Pick<IconCheckProps, "value">>(
  {
    fontWeight: "900",
    marginLeft: "4px",
  },
  ({ theme, value }) => ({
    fontSize: theme.fontSizes.small,
    color: value ? theme.colors.primary : theme.colors.black,
  })
)
