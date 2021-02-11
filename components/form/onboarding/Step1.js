import { useEffect, useState } from 'react'
import RadioButtons from '../RadioButtons'

export default function Step1({ onChange, setError, formData }) {

  const [applyData, setApplyData] = useState()
  const [onboardingData, setOnboardingData] = useState()

  useEffect(() => {
    const applyRaw = window.localStorage.getItem("fairRateApply")
    const onboardingRaw = window.localStorage.getItem("fairRateOnboarding")

    if (applyRaw) {
      setApplyData(applyRaw)
    }
  }, []);


  const validate = (e) => {
    if (e.target.value === "No") {
      setError("Please create an account first")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1>Hey welcome!</h1>

      {applyData ?
        <>
          <h2 className="mt-6">It seems like you have been here before.</h2>
          <p className="mb-6">Do you want to continue your application where you last left?</p>
          <RadioButtons
            values={["Yes", "Start over"]}
            name={"resumeApplication"}
            checked={formData.resumeApplication}
            onChange={onChange}
          />
        </>
        :
        <>
          <h2 className="my-6">Do you already have a FairRate account?</h2>
          <RadioButtons
            values={["Yes", "Nope"]}
            name={"accountExists"}
            checked={formData.accountExists}
            onChange={onChange}
          />
        </>
      }
    </>
  )
}
