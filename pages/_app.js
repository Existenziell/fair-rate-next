import { AppWrapper } from '../context/state'
import Head from '../components/head'

import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/mediaqueries.css'

function FairRate({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default FairRate
