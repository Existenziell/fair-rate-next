import RadioButtons from '../RadioButtons'

export default function Step1({ onChange, setError, formData }) {

  const checkedYes = formData.patientFunded === "Yes"
  const checkedNo = formData.patientFunded === "No"

  const validate = (e) => {
    e.target.value !== "Yes" ?
      setError("Please acknowledge the above statement in order to continue.") :
      setError("")
    onChange(e)
  }

  return (
    <>
      <h1>Hey welcome!</h1>
      <h2>Do you already have a FairRate account?</h2>
      <RadioButtons values={["Yes", "Nope"]} name={"account-exists"} onChange={onChange} />
    </>
  )
}
