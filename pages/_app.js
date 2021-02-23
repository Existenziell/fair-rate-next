import { Provider as AuthProvider } from 'next-auth/client'
import { AppWrapper } from '../context/state'
import Head from '../components/Head'

import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/mediaqueries.css'

const FairRateApp = ({ Component, pageProps }) => {

  return (
    <AuthProvider
      options={{ clientMaxAge: 0, keepAlive: 1 }}
      session={pageProps.session} >

      <AppWrapper>
        <Head />
        <Component {...pageProps} />
      </AppWrapper>

    </AuthProvider>
  )
}

export default FairRateApp
