import { CSSObject } from "@emotion/react"

export const theme = {
  fontSizes: {
    large: "24px",
    medium: "20px",
    default: "16px",
    small: "14px",
    xsmall: "12px",
  },
  colors: {
    black: "#333",
    primary: "#7856FF",
    error: "#FF5656",
    white: "#fff",
    gray: "#d3d3d3",
  },
  letterSpacing: {
    wide: "0.025em",
  },
  maxWidth: {
    full: "100%",
    modal: "420px",
    default: "580px",
  },
  zIndex: {
    default: 1,
    overlay: 5,
    modal: 10,
  },
  shadow: {
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  mq: {
    md: "@media (min-width: 580px)",
  },
  focus: (extraStyle?: CSSObject) => ({
    transition: "box-shadow 0.2s ease",
    "&:focus": {
      boxShadow: "0 0 0 2px rgba(120, 86, 255, 0.3)",
      transition: "box-shadow 0.2s ease-out",
      ...extraStyle,
    },
  }),
} as const
