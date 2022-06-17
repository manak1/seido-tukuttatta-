import styled from "@emotion/styled"

import { MedalProps, MedalVariants } from "."

export const Medal = styled.div<MedalProps>(
  {
    width: "46px",
    height: "46px",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
  },
  ({ theme, variant }) => ({
    fontSize: theme.fontSizes.large,
    color: theme.colors.white,
    boxShadow: theme.shadow.md,
    ...setVariant(variant),
  })
)

function setVariant(variant: MedalVariants) {
  switch (variant) {
    case "gold": {
      return {
        textShadow: "2px 1px 1px #b67b03",
        background:
          "linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)",
      }
    }
    case "silver": {
      return {
        textShadow: "2px 1px 1px #757575",
        background:
          "linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%)",
      }
    }
    case "bronze": {
      return {
        textShadow: "2px 1px 1px #BE7023",
        background:
          "linear-gradient(45deg, #BE7023 0%, #D77E27 45%, #FFCB98 70%, #D77E27 85%, #BE7023 90% 100%)",
      }
    }
  }
}
