import { ThemeProvider, Global } from "@emotion/react"
import { RecoilRoot } from "recoil"

import ErrorModalControl from "~/components/functional/ErrorModalControl"

import { theme } from "~/styles/theme"

import type { AppProps } from "next/app"

import "sanitize.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ErrorModalControl />
        <Global
          styles={{
            color: theme.colors.black,
            "::placeholder": {
              color: "rgb(117,117,117)",
            },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
