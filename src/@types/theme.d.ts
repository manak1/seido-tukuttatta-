import "@emotion/react"
import { theme } from "~/styles/theme"

declare module "@emotion/react" {
  interface Theme {
    fontSizes: FontSizes
    colors: Colors
    focus: typeof theme["focus"]
  }
}

type FontSizes = {
  [P in keyof typeof theme["fontSizes"]]: string
}

type Colors = {
  [P in keyof typeof theme["colors"]]: string
}
