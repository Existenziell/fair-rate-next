import Main from '../components/Main'
import Button from '../components/form/Button'
import Link from 'next/link'

export default function Home() {
  return (

    <Main title='FairRate Mortgage App' titleSuffix={false}>
      <div className="flex flex-col items-center justify-center min-h-full p-8">

        <h1 className="text-center w-3/5">
          Forget Everything You Know About Insurance
        </h1>

        <p className="mt-8 mb-16">
          Instant everything. Incredible prices. Big heart.
        </p>

        <Link href="/onboarding">
          <a>
            <Button text="Check our Prices" type="primary promo" />
          </a>
        </Link>
      </div>
    </Main>
  )
}
