import RadioButtons from '../RadioButtons'

export default function Step1({ onChange, setError, formData }) {

  const validate = (e) => {
    if (e.target.value === "No") {
      setError("Please create an account first")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1>Hey welcome!</h1>
      <h2 className="my-6">Do you already have a FairRate account?</h2>
      <RadioButtons
        values={["Yes", "Nope"]}
        name={"accountExists"}
        checked={formData.accountExists}
        onChange={onChange}
      />
    </>
  )
}
