import RadioButtons from '../RadioButtons'

export default function Step2({ onChange, setError, formData }) {

  const validate = (e) => {
    if (e.target.value !== "Yes") {
      // get data...
      setError("Please acknowledge the above statement in order to continue.")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1>Your data</h1>
      <h2 className="my-6">Do you want us to retrieve your data now?</h2>
      <RadioButtons
        name={"retrieveData"}
        values={["Yes", "No, later please"]}
        checked={formData.retrieveData}
        onChange={onChange}
      />
    </>
  )
}
