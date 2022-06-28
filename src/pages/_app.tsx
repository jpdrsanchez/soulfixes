import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

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
import { success, error } from 'shared/toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Toaster toastOptions={{ success, error }} position="top-right" />
    </>
  )
}

export default MyApp
