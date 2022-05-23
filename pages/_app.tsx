import App from 'next/app'
import Head from 'next/head'
import { GlobalContext } from '../lib/context'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'
import { GLOBAL_DATA_PATH } from '../lib/constants'
import '../styles/globals.css'
import type { AppProps, AppContext } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
  // getInitialProps disables automatic static optimization for pages that don't
  // have getStaticProps. So article, category and home pages still get SSG.
  // Hopefully we can replace this with getStaticProps once this issue is fixed:
  // https://github.com/vercel/next.js/discussions/10949
  const appProps = await App.getInitialProps(context)

  const globalProps = await fetchAPI(GLOBAL_DATA_PATH, {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })

  return { ...appProps, pageProps: { global: globalProps.data }}
}

export default MyApp
