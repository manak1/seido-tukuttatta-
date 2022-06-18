import { ThemeProvider, Global } from "@emotion/react"
import { NextSeo } from "next-seo"
import { RecoilRoot } from "recoil"

import ErrorModalControl from "~/components/functional/ErrorModalControl"
import SwrConfig from "~/components/functional/SwrConfig"

import { globalStyle } from "~/styles/global"
import { theme } from "~/styles/theme"

import type { AppProps } from "next/app"

import "sanitize.css"
import { config } from "~/constants/config"
import { PAGE_DESCRIPTION, PAGE_TITLE } from "~/constants/seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE}`}
        openGraph={{
          type: "website",
          locale: "ja_JP",
          site_name: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          images: [
            {
              url: `${config.SITE_URL}/ogp.png`,
              type: "image/png",
              width: 654,
              height: 356,
            },
          ],
          url: config.SITE_URL,
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <RecoilRoot>
        <SwrConfig>
          <ThemeProvider theme={theme}>
            <ErrorModalControl />
            <Global styles={globalStyle} />
            <Component {...pageProps} />
          </ThemeProvider>
        </SwrConfig>
      </RecoilRoot>
    </>
  )
}

export default MyApp
