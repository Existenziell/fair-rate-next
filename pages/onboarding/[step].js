import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import Main from '../../components/Main'
import Step1 from '../../components/form/onboarding/Step1'
import Step2 from '../../components/form/onboarding/Step2'
import Step3 from '../../components/form/onboarding/Step3'
import Step4 from '../../components/form/onboarding/Step4'
import Step5 from '../../components/form/onboarding/Step5'
import Step6 from '../../components/form/onboarding/Step6'
import Step7 from '../../components/form/onboarding/Step7'
import Step8 from '../../components/form/onboarding/Step8'
import Step9 from '../../components/form/onboarding/Step9'
import Spinner from '../../components/Spinner'

export default function OnboardingForm() {

  const [formData, setFormData] = useState([])
  const [formButtonDisabled, setFormButtonDisabled] = useState(false)
  const totalSteps = 9
  const [error, setError] = useState(false)

  const router = useRouter()
  const step = parseInt(router.query.step)

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const nextStep = (e) => {
    const form = document.forms[0]
    if (form.checkValidity()) {
      localStorage.setItem("fairRateOnboarding", JSON.stringify(formData))
      router.push(`/onboarding/${parseInt(step) + 1}`)
      e.preventDefault()
    }
  }

  const previousStep = (e) => {
    router.push(`/onboarding/${step - 1}`)
    e.preventDefault()
  }

  const handleSubmit = async (e) => {
    const form = document.forms[0]
    if (form.checkValidity()) {
      e.preventDefault()
      setFormButtonDisabled(true)
      document.getElementById("submitBtn").classList.add("disabled")

      try {
        const res = await fetch('/api/onboard', {
          method: "post",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        })
        res.status === 200 ?
          Router.push('/approved') :
          setError(res.statusText)
      } catch (error) {
        setError(error.message)
      }
    }
  }

  return (
    <Main title='Apply' titleSuffix={true}>
      <div className='flex flex-col items-center justify-center my-16 px-4 md:px-8 min-h-full relative'>

        <div className="w-full md:w-4/5 lg:w-1/2 mt-8">
          <form className="flex flex-col items-center w-full text-center" onSubmit={handleSubmit} >

            <div className="absolute right-8 -top-4 w-32 text-gray-500">
              <span>Step {step} / {totalSteps}</span>
            </div>

            {step === 1 &&
              <Step1 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 2 &&
              <Step2 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 3 &&
              <Step3 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 4 &&
              <Step4 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 5 &&
              <Step5 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 6 &&
              <Step6 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 7 &&
              <Step7 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 8 &&
              <Step8 onChange={onChange} formData={formData} setError={setError} />
            }
            {step === 9 &&
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
                  {step > 1 &&
                    <a onClick={previousStep} className="transition-all	cursor-pointer block absolute w-16 left-8 -top-8 text-gray-200 hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </a>
                  }
                  {step < totalSteps ?
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
      </div>
    </Main>
  )
}
