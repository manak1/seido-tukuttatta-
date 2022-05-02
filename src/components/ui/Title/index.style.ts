import { Theme } from "@emotion/react"
import styled from "@emotion/styled"

import { TitleTags, TitleSizes, TitleProps } from "./index"

export const createTitleStyle = (tag: TitleTags) => {
  const Component = styled(tag)<TitleProps>(
    {
      fontWeight: "bold",
      margin: 0,
    },
    ({ theme, size }) => ({
      ...setTitleSize(size, theme),
    })
  )

  return Component
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
  }
}
