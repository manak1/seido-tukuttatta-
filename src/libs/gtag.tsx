/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @next/next/inline-script-id */
/* 
参考: https://panda-program.com/posts/nextjs-google-analytics
 */

import { useRouter } from "next/router"
import Script from "next/script"
import { useEffect } from "react"

import { config } from "~/constants/config"

const GA_ID = config.GA_ID ?? ""
export const isValidGaId = config.GA_ID !== ""

export const pageView = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  })
}

export const usePageView = () => {
  const router = useRouter()

  useEffect(() => {
    if (!isValidGaId) return

    const handleRouteChange = (path: string) => {
      pageView(path)
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
}

// _app.tsx で読み込む
export const GoogleAnalytics = (): JSX.Element => (
  <>
    {isValidGaId && (
      <>
        <Script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${GA_ID}');
            `,
          }}
          strategy="afterInteractive"
        />
      </>
    )}
  </>
)
