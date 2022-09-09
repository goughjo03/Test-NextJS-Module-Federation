import '../styles/globals.css'
import type { AppProps } from 'next/app'

// _app.js or some other file in as high up in the app (like next's new layouts)
// this ensures various parts of next.js are imported and "used" somewhere so that they wont be tree shaken out
import '@module-federation/nextjs-mf/lib/include-defaults';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
