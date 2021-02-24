import { getSession, useSession, signIn } from 'next-auth/client'
import { useState } from 'react'
import Link from 'next/link'
import TelInput from '../components/form/TelInput'
import Spinner from '../components/Spinner'
import Main from '../components/Main'
import Router from 'next/router'
import OtpInput from 'react-otp-input'

export default function verifyPhone() {

  const [session, loading] = useSession()
  const [verifying, setVerifying] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [otp, setOtp] = useState(0)
  const [userOtp, setUserOtp] = useState(0)

  const initiateOtp = (e) => {
    const form = document.forms[0]
    const number = document.querySelector('#phoneNumber').value
    if (form.checkValidity()) {
      e.preventDefault()
      sendSMS(number)
    }
  }

  const getOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000)
    setOtp(otp)
    return otp
  }

  const checkOtp = async (e) => {
    e.preventDefault()
    if (parseInt(userOtp) === otp) {
      // If no session, redirect to login first
      if (!session) signIn('auth0')
      // Add verified phone number to user object in DB
      const res = await fetch('/api/twilio/update-phone', {
        method: "post",
        body: JSON.stringify({ phoneNumber }),
        headers: { "Content-Type": "application/json" }
      })
      res.status === 200 ?
        Router.push(`/verified`) :
        console.log(res.statusText)
    } else {
      console.log(`Error: otp: ${otp} | userOtP: ${userOtp} | otp: ${typeof (otp)} | userOtP: ${typeof (userOtp)}`)
    }
  }

  const sendSMS = async (number) => {
    const otp = getOTP()
    const message = `Thank you, your code is: ${otp}`
    const to = number.replaceAll(' ', '').trim()

    const res = await fetch("/api/twilio/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, message }),
    })

    const data = await res.json()
    setPhoneNumber(to)
    setVerifying(true)
  }

  return (
    <>
      <Main title='Apply' titleSuffix={true}>
        <div className='flex flex-col items-center justify-center my-16 px-8 md:px-16 relative'>
          <div className="w-full md:w-4/5 lg:w-1/2 mt-8">

            {verifying ?

              <div className="flex flex-col items-center justify-center">
                <h1 className="mb-8">Please enter your verification pin:</h1>
                <OtpInput
                  value={userOtp}
                  onChange={(e) => setUserOtp(e)}
                  numInputs={6}
                  separator={<span>-</span>}
                  id="userOtp"
                  required={true}
                  containerStyle={'mb-8 text-4xl'}
                />
                <a href="#" onClick={checkOtp} className="button">Check</a>
              </div>

              :

              <form onSubmit={initiateOtp} className="flex flex-col items-center w-full text-center">

                <h1>Protecting your information is our priority</h1>
                <h2 className="my-10">FairRate uses two-factor authentication with your U.S. mobile number. You will receive a secret pin via SMS.</h2>

                <TelInput
                  name={"phoneNumber"}
                  label={"Your mobile number"}
                  placeholder={"917-420-4179"}
                  required={true}
                />

                <div className="text-sm">
                  <p className="mb-4">We wil never sell or share your personal details with anyone. Ever.</p>
                  <p>By registering you agree to{` `}
                    <Link href='/privacy-policy'><a>FairRate’s Privacy Policy</a></Link>.
                  </p>
                  <div className="flex flex-row items-center justify-center text-sm my-4">
                    <svg className="w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>256-bit encryption</span>
                  </div>
                </div>
                <button type="submit"
                  name="submit"
                  id="submitBtn"
                  className="button primary relative flex items-center justify-center mt-8"
                >
                  <span>Protect my account</span>
                  {verifying &&
                    <Spinner type="dualring" className="w-1" />
                  }
                </button>
              </form>
            }
          </div>
        </div>
      </Main>
    </>
  )
}
