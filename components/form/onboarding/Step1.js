import { useEffect, useState } from 'react'
import RadioButtons from '../RadioButtons'
import NumberInput from '../NumberInput'

export default function Step1({ onChange, setError, formData }) {

  const [onboardingData, setOnboardingData] = useState()

  useEffect(() => {
    const onboardingRaw = JSON.parse(localStorage.getItem('fairRateOnboarding'))
    // If we know the firstname, trigger resume (where user left off last time)
    if (onboardingRaw) {
      setOnboardingData(onboardingRaw)
    }
  }, [])

  const validate = (e) => {
    const { name, value } = e.target
    if (value < 0) {
      setError("Must be a positive number")
    } else if (value > 1_000_000_000) {
      setError("Too high?")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      {onboardingData &&
        onboardingData.firstName &&
        <h3 className="text-center mb-4">Welcome back, {onboardingData.firstName}</h3>
      }
      <>
        <h1>What is the expected purchase price?</h1>
        <h2 className="my-6">Your best guess is OK</h2>
        <NumberInput
          name={"purchasePrice"}
          value={formData.purchasePrice}
          label={"Purchase Price"}
          placeholder={"150.000"}
          onChange={validate}
          suffix={"$"}
          required={true}
        />
      </>
    </>
  )
}
