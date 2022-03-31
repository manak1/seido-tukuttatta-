import { ThemeProvider, Global } from "@emotion/react"
import type { AppProps } from "next/app"
import { theme } from "~/styles/theme"
import "sanitize.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          color: theme.colors.black,
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
