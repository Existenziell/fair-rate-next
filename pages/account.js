import { useEffect, useState } from 'react'
import Main from '../components/main'

const Account = () => {

  const [formData, setFormData] = useState()

  let onboardingData, applyData
  useEffect(() => {
    // console.log(formData);
    onboardingData = window.localStorage.getItem("fairRateOnboarding")
    applyData = window.localStorage.getItem("fairRateApply")
    // console.log(onboardingData);
  }, [])

  return (
    <Main title='My Account' titleSuffix={true}>
      <div className="flex flex-col items-center justify-center my-16">
        <h1 className="mb-6">My Account</h1>

        <h2>My Data:</h2>
        <pre className="my-12">{JSON.stringify({ name: "Leon Lamle", email: "llamle@fairrate.com" }, null, 2)}</pre>

        <h2>Onboarding:</h2>
        <pre className="my-12">{JSON.stringify(onboardingData, null, 2)}</pre>

        <h2>Application Process:</h2>
        <pre className="my-12">{JSON.stringify(applyData, null, 2)}</pre>
      </div>
    </Main>
  )
}

export default Account
