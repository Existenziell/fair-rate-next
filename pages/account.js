import { useEffect, useState } from 'react'
import Main from '../components/main'

const Account = () => {

  const [formData, setFormData] = useState()
  const [onboardingData, setOnboardingData] = useState()
  const [applyData, setApplyData] = useState()

  useEffect(() => {
    const applyRaw = window.localStorage.getItem("fairRateApply");
    const onboardingRaw = window.localStorage.getItem("fairRateOnboarding")
    if (applyRaw) {
      setApplyData(applyRaw)
    }
    if (onboardingRaw) {
      setOnboardingData(onboardingRaw)
    }
  }, []);

  return (
    <Main title='My Account' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16">
        <h1 className="mb-6">My Account</h1>

        <h2>Onboarding:</h2>
        <pre className="my-12">{JSON.stringify(onboardingData, null, 2)}</pre>

        <h2>Application Process:</h2>
        <pre className="my-12">{JSON.stringify(applyData, null, 2)}</pre>
      </div>
    </Main>
  )
}

export default Account
