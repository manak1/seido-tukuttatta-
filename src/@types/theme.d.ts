import "@emotion/react"
import { theme } from "~/styles/theme"

type CustomTheme = typeof theme
declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
