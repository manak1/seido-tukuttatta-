import { css } from "@emotion/react"
import { colors, fontSizes } from "~/styles/variables"

export const styles = {
  wrapper: css({
    display: "flex",
    flexDirection: "column",
  }),

  input: css({
    marginTop: "8px",
    fontSize: fontSizes.default,
    padding: "8px 16px",
    outline: "none",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
    "&:focus": {
      borderColor: colors.primary,
    },
  }),
}
