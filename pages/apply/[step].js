import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import Main from '../../components/Main'
import Step1 from '../../components/form/apply/Step1'
import Step2 from '../../components/form/apply/Step2'
import Step3 from '../../components/form/apply/Step3'
import Step4 from '../../components/form/apply/Step4'
import Step5 from '../../components/form/apply/Step5'
import Step6 from '../../components/form/apply/Step6'
import Spinner from '../../components/Spinner'

export default function ApplyForm() {

  const [formData, setFormData] = useState([])
  const [formButtonDisabled, setFormButtonDisabled] = useState(false)
  const totalSteps = 6
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
      localStorage.setItem("fairRateApply", JSON.stringify(formData))
      router.push(`/apply/${parseInt(step) + 1}`)
      e.preventDefault()
    }
  }

  const handleSubmit = async (e) => {
    const form = document.forms[0]
    if (form.checkValidity()) {
      e.preventDefault()
      setFormButtonDisabled(true)
      document.getElementById("submitBtn").classList.add("disabled")

      try {
        const res = await fetch('/api/apply', {
          method: "post",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" }
        })
        res.status === 200 ?
          Router.push('/success') :
          setError(res.statusText)
      } catch (error) {
        setError(error.message)
      }
    }
  }

  return (
    <Main title='Apply' titleSuffix={true}>
      <div className='flex flex-col items-center justify-center my-16 px-8 md:px-16 relative'>

        <div className="w-full md:w-4/5 lg:w-1/2 mt-8">
          <form className="flex flex-col items-center w-full text-center" onSubmit={handleSubmit}>

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

            {error &&
              <div className="mt-8 text-red-400">
                {error}
              </div>
            }

            {!error
              ? (
                <div className="mt-8">
                  {step > 1 &&
                    <Link href={`/apply/${step - 1}`}>
                      <a className="transition-all	cursor-pointer block absolute w-16 left-8 -top-8 text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </a>
                    </Link>
                  }
                  {step < totalSteps ?
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
      </div>
    </Main>
  )
}
