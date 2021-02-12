import Main from '../components/main'
import Button from '../components/form/Button'
import Link from 'next/link'

export default function Home() {
  return (

    <Main title='FairRate Mortgage App' titleSuffix={false}>
      <div className="flex flex-col items-center justify-center p-8 mt-4 mb-16">

        <h1 className="text-center sm:w-1/3 md:w-2/5">
          Get the right home loan at a great rate
        </h1>

        <h2 className="mt-8 mb-16 text-center sm:w-1/3 md:w-2/5">
          Compare, choose &amp; settle with America’s number 1 online home loan platform
        </h2>

        <Link href="/apply">
          <a className="mb-4">
            <Button text="I want to refinance" modifier="primary promo" icon='dollar' size={340} />
          </a>
        </Link>

        <Link href="/onboarding">
          <a>
            <Button text="I want to buy a home" modifier="primary promo" icon='house' size={340} />
          </a>
        </Link>
      </div>
    </Main>
  )
}
