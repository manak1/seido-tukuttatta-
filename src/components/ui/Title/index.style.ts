import { Theme } from "@emotion/react"
import styled from "@emotion/styled"

import { TitleTags, TitleSizes, TitleProps, TitleBold } from "./index"

export const createTitleStyle = (tag: TitleTags) => {
  const Component = styled(tag)<TitleProps>(
    {
      margin: 0,
    },
    ({ theme, size, fontWeight }) => ({
      ...setTitleSize(size, theme),
      ...setFontWeight(fontWeight),
    })
  )

  return Component
}

const setFontWeight = (fontWeight: TitleBold = "bold") => {
  switch (fontWeight) {
    case "black": {
      return {
        fontWeight: "900",
      }
    }
    case "bold": {
      return {
        fontWeight: "700",
      }
    }
  }
}

const setTitleSize = (size: TitleSizes = "default", theme: Theme) => {
  switch (size) {
    case "sm":
      return {
        fontSize: theme.fontSizes.default,
      }

    case "default":
      return {
        fontSize: theme.fontSizes.medium,
      }

    case "md":
      return {
        fontSize: theme.fontSizes.large,
      }

    case "lg":
      return {
        fontSize: theme.fontSizes.xlarge,
      }

    case "xlg":
      return {
        fontSize: theme.fontSizes.xxlarge,
      }
  }
}
