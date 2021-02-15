import Main from '../components/Main'
import OnboardingForm from '../components/form/OnboardingForm'

const Onboarding = () => {

  return (
    <Main title='Onboarding' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16 px-6 min-h-full relative">
        <OnboardingForm />
      </div>
    </Main>
  )
}

export default Onboarding
