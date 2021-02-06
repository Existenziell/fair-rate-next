import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Navigation from './Navigation'
import Footer from './Footer'

const addBrandToTitle = (title, addSuffix = true) => (addSuffix ? `${title} | FaiRate` : title)

const Main = ({ title, children, titleSuffix = true }) => {
  const router = useRouter()
  return (
    <Fragment>
      <Navigation />
      <main className='main'>
        <NextSeo title={addBrandToTitle(title, titleSuffix)} />
        {children}
      </main>
      {router.pathname !== '/apply' && <Footer />}
    </Fragment>
  )
}

export default Main
