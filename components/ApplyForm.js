import { useState } from 'react'
import Router from 'next/router'
import Step1 from './form/apply/Step1'
import Step2 from './form/apply/Step2'
import Step3 from './form/apply/Step3'
import Step4 from './form/apply/Step4'
import Step5 from './form/apply/Step5'
import Step6 from './form/apply/Step6'
import Step7 from './form/apply/Step7'
import Step8 from './form/apply/Step8'
import Step9 from './form/apply/Step9'
import Step10 from './form/apply/Step10'
import axios from 'axios'

export default function ApplyForm() {

  const [currentStep, setCurrentStep] = useState(1)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState([])
  const [formButtonDisabled, setFormButtonDisabled] = useState(false)

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
    e.preventDefault()
    Router.push('/success/')
    const form = document.forms[0]
    if (form.checkValidity()) {
      // setFormButtonDisabled(true)
      // document.getElementById("submitBtn").classList.add("disabled")

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
        Router.push('/success/') :
        setError("We are sorry, an error occurred.")
    }
  }

  return (
    <>
      <div className="w-full md:w-4/5 lg:w-1/2 mt-8">
        <form className="flex flex-col items-center w-full text-center" onSubmit={handleSubmit}>

          <div className="absolute right-8 -top-4 w-32 text-gray-500">
            <span>Step {currentStep} / 8</span>
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
          {currentStep === 8 &&
            <Step8 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 9 &&
            <Step9 onChange={onChange} formData={formData} setError={setError} />
          }
          {currentStep === 10 &&
            <Step10 onChange={onChange} formData={formData} setError={setError} />
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
                  <a className="back block absolute w-16 left-8 -top-8 text-gray-200 hover:text-gray-500" onClick={previousStep}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                }
                {currentStep < 10 ?
                  <input type="submit" name="next" onClick={nextStep} value="Next" className="button primary" />
                  :
                  <input type="submit" name="submit" id="submitBtn" value="Complete Application" className="button primary" onClick={handleSubmit} disabled={formButtonDisabled} />
                }
              </div>
            )
            : null
          }
        </form>
      </div>

      <style jsx>{`
        .back {
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .button {
          cursor: pointer;
          display: inline-block;
          border: 0;
          outline: 0;
          font-size: 16px;
          border-radius: 4px;
          color: white;
          font-family: 'Lato', sans-serif;
          font-weight: bold;
          box-shadow: -5px -5px 20px white, 5px 5px 20px #333;
          transition: all 0.2s ease-in-out;
          font-weight: 600;
          padding: 10px 30px;
          min-width: fit-content;
        }
        .button:hover {
          box-shadow: -2px -2px 5px white, 2px 2px 5px #333;
        }
        .button:active {
          box-shadow: inset 1px 1px 2px #333, inset -1px -1px 2px white;
        }
        .button.promo {
          font-size: 30px;
          padding: 20px 40px;
        }
        .button.primary {
          background-color: rgb(255, 0, 131);
          color: white;
        }
        .button.secondary {
          background-color: white;
          color: rgb(255, 0, 131);
        }
        }
      `}</style>
    </>
  )
}
