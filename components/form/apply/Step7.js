import NumberInput from '../NumberInput'

export default function Step7({ onChange, formData, setError }) {

  const validate = (e) => {
    const { value } = e.target
    if (value < 6) {
      setError("That's highly unlikely")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Number of Months</h2>
      <NumberInput
        placeholder={"Please intert the desired number of months"}
        name={"numberOfMonths"}
        onChange={validate}
        value={formData.numberOfMonths}
        required={true}
      />
    </>
  )
}
