import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EnglishProvider } from '../context/englishContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
