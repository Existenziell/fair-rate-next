import Main from '../components/Main'

const Onboarding = () => {

  return (
    <Main title='Onboarding' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16">
        <h1>Hey welcome!</h1>
        <h2>Do you already have a FairRate account?</h2>
      </div>

      <style jsx>{`
        
      `}</style>
    </Main>
  )
}

export default Onboarding
