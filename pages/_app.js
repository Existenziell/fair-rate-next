import { AppWrapper } from '../context/state'
import Head from '../components/Head'

import '../styles/globals.css'
import '../styles/navbar.css'

function FairRate({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default FairRate
