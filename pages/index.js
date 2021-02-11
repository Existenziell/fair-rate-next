import Main from '../components/main'
import Button from '../components/form/Button'
import Link from 'next/link'

export default function Home() {
  return (

    <Main title='FairRate Mortgage App' titleSuffix={false}>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">

        <h1 className="text-center md:w-3/5">
          Forget Everything You Know About Mortgage
        </h1>

        <p className="mt-8 mb-16 text-center">
          Free for you.<br />
          Compare 'em all.<br />
          Big heart.
        </p>

        <Link href="/onboarding">
          <a>
            <Button text="Start Onboarding" modifier="primary promo" />
          </a>
        </Link>
      </div>
    </Main>
  )
}
