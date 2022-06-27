import type { AppProps } from 'next/app'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/stix-two-text/400.css'
import '@fontsource/stix-two-text/500.css'
import '@fontsource/stix-two-text/600.css'
import '@fontsource/stix-two-text/700.css'

import { GlobalStyles } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
