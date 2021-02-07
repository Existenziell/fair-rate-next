import RadioButtons from '../RadioButtons'

export default function Step3({ onChange, setError, formData }) {

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
      <h1>All set</h1>
      <pre className="my-16">{JSON.stringify(formData, null, 2)}</pre>
    </>
  )
}
