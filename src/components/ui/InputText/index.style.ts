import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { colors, fontSizes } from "~/styles/theme"

/* export const styles = {
  wrapper: css({
    display: "flex",
    flexDirection: "column",
  }),

  input: css({
    marginTop: "4px",
    fontSize: fontSizes.default,
    padding: "8px",
    outline: "none",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
    "&:focus": {
      borderColor: colors.primary,
    },
  }),
} */

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
})

export const Input = styled.input(
  {
    marginTop: "4px",
    padding: "8px",
    outline: "none",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.small,
    "&:focus": {
      borderColor: theme.colors.primary,
    },
  })
)
