import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import Main from '../components/Main'
import Button from '../components/form/Button'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <>
      <Main title='FairRate Mortgage App' titleSuffix={false}>
        <div className="bg-floorplan bg-cover flex flex-col items-center justify-center px-6 pt-12 pb-32">

          <h1 className="text-center sm:w-1/3 md:w-2/5">
            Get the right home loan at a great rate
          </h1>

          <h2 className="mt-8 mb-16 text-center sm:w-1/3 md:w-2/5 p-4 bg-opacity-60 bg-white">
            Compare, choose &amp; settle with America’s number 1 online home loan platform
          </h2>

          <Link href="/apply">
            <a className="mb-4">
              <Button text="I want to refinance" modifier="primary promo" icon='currency-dollar' size={340} />
            </a>
          </Link>

          <Link href="/onboarding">
            <a>
              <Button text="I want to buy a home" modifier="primary promo" icon='home' size={340} />
            </a>
          </Link>
        </div>
      </Main>
    </>
  )
}
