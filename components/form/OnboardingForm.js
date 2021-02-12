import { useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import Step1 from './onboarding/Step1'
import Step2 from './onboarding/Step2'
import Step3 from './onboarding/Step3'
import Step4 from './onboarding/Step4'
import Step5 from './onboarding/Step5'
import Step6 from './onboarding/Step6'
import Step7 from './onboarding/Step7'
import Step8 from './onboarding/Step8'
import Step9 from './onboarding/Step9'
import Spinner from '../Spinner'

export default function OnboardingForm() {

  const [formData, setFormData] = useState([])
  const [formButtonDisabled, setFormButtonDisabled] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 9
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

  const handleSubmit = async (e) => {
    const form = document.forms[0]
    if (form.checkValidity()) {
      e.preventDefault()
      setFormButtonDisabled(true)
      document.getElementById("submitBtn").classList.add("disabled")

      const data = JSON.stringify(formData)
      const res = await axios({
        method: "post",
        url: "/api/onboard",
        headers: {
          "Content-Type": "application/json"
        },
        data
      })

      res.status === 200 ?
        Router.push('/approved') :
        setError("We are sorry, an error occurred.")
    }
  }

  return (
    <>
      <div className="w-full md:w-4/5 lg:w-1/2 mt-8">
        <form className="flex flex-col items-center w-full text-center" onSubmit={handleSubmit} >

          <div className="absolute right-8 -top-4 w-32 text-gray-500">
            <span>Step {currentStep} / {totalSteps}</span>
          </div>

          {currentStep === 1 &&
            <Step1 onChange={onChange} formData={formData} setError={setError} currentStep={currentStep} setCurrentStep={setCurrentStep} />
          }
          {currentStep === 2 &&
            <Step2 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 3 &&
            <Step3 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 4 &&
            <Step4 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 5 &&
            <Step5 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 6 &&
            <Step6 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 7 &&
            <Step7 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 8 &&
            <Step8 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 9 &&
            <Step9 onChange={onChange} formData={formData} setError={setError} />
          }

          {error &&
            <div className="mt-8 text-red-400">
              {error}
            </div>
          }

          {!error
            ? (
              <div className="mt-8">
                {currentStep > 1 &&
                  <a onClick={previousStep} className="transition-all	cursor-pointer block absolute w-16 left-8 -top-8 text-gray-200 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                }
                {currentStep < totalSteps ?
                  <input type="submit" name="next" onClick={nextStep} value="Next" className="button primary" />
                  :
                  <button type="submit"
                    name="submit"
                    id="submitBtn"
                    className="button primary relative flex items-center justify-center"
                    onClick={handleSubmit}
                    disabled={formButtonDisabled}
                  >
                    <span>Protect my account</span>
                    {formButtonDisabled &&
                      <Spinner type="dualring" className="w-1" />
                    }
                  </button>
                }
              </div>
            )
            : null
          }
        </form>
      </div>


    </>
  )
}
