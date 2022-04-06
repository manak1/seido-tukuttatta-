import { CSSObject } from "@emotion/react"

export const theme = {
  fontSizes: {
    large: "24px",
    medium: "20px",
    default: "16px",
    small: "14px",
    xsmall: "12px",
  } as const,
  colors: {
    black: "#333",
    primary: "#7856FF",
    error: "#FF5656",
    white: "#fff",
    gray: "#d3d3d3",
  } as const,
  maxWidth: {
    full: "100%",
    default: "580px",
  },
  focus: (extraStyle?: CSSObject) => ({
    transition: "box-shadow 0.2s ease",
    "&:focus": {
      boxShadow: "0 0 0 2px rgba(120, 86, 255, 0.3)",
      transition: "box-shadow 0.2s ease-out",
      ...extraStyle,
    },
  }),
}
