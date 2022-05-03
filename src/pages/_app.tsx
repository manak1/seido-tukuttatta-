import { ThemeProvider, Global } from "@emotion/react"
import { RecoilRoot } from "recoil"

import ErrorModalControl from "~/components/functional/ErrorModalControl"
import SwrConfig from "~/components/functional/SwrConfig"

import { globalStyle } from "~/styles/global"
import { theme } from "~/styles/theme"

import type { AppProps } from "next/app"

import "sanitize.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SwrConfig>
        <ThemeProvider theme={theme}>
          <ErrorModalControl />
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </ThemeProvider>
      </SwrConfig>
    </RecoilRoot>
  )
}

export default MyApp
