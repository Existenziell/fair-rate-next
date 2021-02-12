import TelInput from '../TelInput'
import Link from 'next/link'

export default function Step10({ onChange, setError, formData }) {

  const validate = (e) => {
    const { name, value } = e.target
    if (value.length > 10) {
      setError("Come on!")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1>Protecting your information is our priority</h1>
      <h2 className="my-10">FairRate uses two-factor authentication with your U.S. mobile number. You will receive a secret pin via SMS.</h2>
      <TelInput
        value={formData.mobileNumber}
        name={"mobileNumber"}
        label={"Your mobile number"}
        placeholder={"917-420-4179"}
        onChange={onChange}
        required={true}
      />
      <p className="text-sm">
        We wil never sell or share your personal details with anyone. Ever.<br />
        By registering you agree to <Link href='/privacy-policy'><a>FairRate’s Privacy Policy</a></Link>
      </p>
      <p className="flex flex-row items-center justify-center text-sm my-4">
        <svg className="w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span>256-bit encryption</span>
      </p>
    </>
  )
}
