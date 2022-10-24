import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EnglishProvider } from '../context/englishContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnglishProvider >
      <Component {...pageProps} />
    </EnglishProvider>
  )
}

export default MyApp
