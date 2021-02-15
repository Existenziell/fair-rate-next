import { Provider } from 'next-auth/client'
import { AppWrapper } from '../context/state'
import Head from '../components/Head'

import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/mediaqueries.css'

const FairRate = ({ Component, pageProps }) => {
  return (
    <Provider
      options={{ clientMaxAge: 0, keepAlive: 1 }}
      session={pageProps.session} >

      <AppWrapper>
        <Head />
        <Component {...pageProps} />
      </AppWrapper>

    </Provider>
  )
}

export default FairRate
