import { css } from "@emotion/react"
import { colors, fontSizes } from "~/styles/variables"

export const styles = {
  label: css({
    fontSize: fontSizes.small,
  }),
  required: css({
    color: colors.error,
  }),
}
