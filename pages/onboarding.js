import Link from 'next/link'
import Main from '../components/Main'
import Button from '../components/form/Button'
import RadioButton from '../components/form/RadioButton'

const Onboarding = () => {

  return (
    <Main title='Onboarding' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16 px-8 min-h-full">
        <h1>Hey welcome!</h1>
        <h2>Do you already have a FairRate account?</h2>

        <div className="flex flex-col items-center w-full md:w-1/2 mt-8">
          <RadioButton values={["Yes", "Nope"]} name={"accountExists"} />
        </div>

        <Link href="/onboarding/1">
          <a className="mt-8">
            <Button text="Next" type="primary" />
          </a>
        </Link>
      </div>

      <style jsx>{`
        
      `}</style>
    </Main>
  )
}

export default Onboarding
