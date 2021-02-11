import NumberInput from '../NumberInput'

export default function Step6({ onChange, formData, setError }) {

  const validate = (e) => {
    const { value } = e.target
    if (value > 20) {
      setError("That's highly unlikely")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Interest Rate:</h2>
      <div className="flex items-center justify-center">
        <NumberInput
          placeholder={"Please insert the interest rate for the loan"}
          name={"interestRate"}
          onChange={validate}
          value={formData.interestRate}
          required={true}
        />
        <span className="pl-2 text-xl">%</span>
      </div>
    </>
  )
}
