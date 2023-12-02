import '@/styles/globals.css'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = {
  Component: NextPageWithLayout
  pageProps: any
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  //return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}
