import { useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import Step1 from './apply/Step1'
import Step2 from './apply/Step2'
import Step3 from './apply/Step3'
import Step4 from './apply/Step4'
import Step5 from './apply/Step5'
import Step6 from './apply/Step6'
import Step7 from './apply/Step7'
import Spinner from '../Spinner'

export default function ApplyForm() {

  const [formData, setFormData] = useState([])
  const [formButtonDisabled, setFormButtonDisabled] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 7
  const [error, setError] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const nextStep = (e) => {
    const form = document.forms[0]
    // HTML5 validity check
    if (form.checkValidity()) {
      localStorage.setItem("fairRateApply", JSON.stringify(formData))
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
        url: "/api/apply",
        headers: {
          "Content-Type": "application/json"
        },
        data
      })

      res.status === 200 ?
        Router.push('/success') :
        setError("We are sorry, an error occurred.")
    }
  }

  return (
    <>
      <div className="w-full md:w-4/5 lg:w-1/2 mt-8">
        <form className="flex flex-col items-center w-full text-center" onSubmit={handleSubmit}>

          <div className="absolute right-8 -top-4 w-32 text-gray-500">
            <span>Step {currentStep} / {totalSteps}</span>
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

          {error &&
            <div className="mt-8 text-red-400">
              {error}
            </div>
          }

          {!error
            ? (
              <div className="mt-8">
                {currentStep > 1 &&
                  <a onClick={previousStep} className="transition-all	cursor-pointer block absolute w-16 left-8 -top-8 text-gray-400 hover:text-gray-600">
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
                    value="Complete Application"
                    className="button primary relative flex items-center justify-center"
                    onClick={handleSubmit}
                    disabled={formButtonDisabled}
                  >
                    <span>Complete Application</span>
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
