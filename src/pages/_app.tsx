import type { AppProps } from "next/app"
import "sanitize.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
