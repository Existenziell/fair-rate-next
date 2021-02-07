import Main from '../components/main'
import OnboardingForm from '../components/OnboardingForm'

const Onboarding = () => {

  return (
    <Main title='Onboarding' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16 px-8 min-h-full relative">
        <OnboardingForm />
      </div>
    </Main>
  )
}

export default Onboarding
