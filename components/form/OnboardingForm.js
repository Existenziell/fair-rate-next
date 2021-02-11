import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import Step1 from './onboarding/Step1'
import Step2 from './onboarding/Step2'
import Step3 from './onboarding/Step3'

const OnboardingForm = () => {

  const [formData, setFormData] = useState([])
  const [currentStep, setCurrentStep] = useState(1)
  const [error, setError] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const nextStep = (e) => {
    const form = document.forms[0]
    if (form.checkValidity()) {
      localStorage.setItem("fairRateOnboarding", JSON.stringify(formData))
      setCurrentStep(currentStep + 1)
      e.preventDefault()
    }
  }

  const previousStep = (e) => {
    setCurrentStep(currentStep - 1)
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    // Router.push('/apply')
    e.preventDefault()
  }

  return (
    <>
      <div className="w-full md:w-4/5 lg:w-1/2 mt-8">
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">

          <div className="absolute right-8 -top-4 w-32 text-gray-500">
            <span>Step {currentStep} / 3</span>
          </div>

          {currentStep === 1 &&
            <Step1 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 2 &&
            <Step2 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 3 &&
            <Step3 onChange={onChange} formData={formData} setError={setError} />
          }
        </form>
      </div>

      <div className="controls mt-8">
        {currentStep > 1 &&
          <a onClick={previousStep} className="transition-all cursor-pointer block absolute w-16 left-8 -top-8 text-gray-200 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        }
        {currentStep < 3 ?
          <a className="mt-8" onClick={nextStep}>
            <Button text="Next" modifier="primary" />
          </a>
          :
          <Link href="/apply">
            <a><Button text="Let's do this" modifier="primary" /></a>
          </Link>
        }
      </div>

      {
        error &&
        <div className="error">
          {error}
        </div>
      }
    </>
  )
}

export default OnboardingForm
