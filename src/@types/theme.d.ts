import "@emotion/react"
import { theme } from "~/styles/theme"

type CustomTheme = typeof theme

declare module "@emotion/react" {
  export interface Theme {
    fontSizes: CustomTheme["fontSizes"]
    colors: CustomTheme["colors"]
    focus: CustomTheme["focus"]
    maxWidth: CustomTheme["maxWidth"]
  }
}
