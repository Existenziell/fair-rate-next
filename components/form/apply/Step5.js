import NumberInput from '../NumberInput'

export default function Step5({ onChange, formData, setError }) {

  const validate = (e) => {
    const { value } = e.target
    if (value <= 0) {
      setError("Are you sure?")
    } else if (value < 10_000) {
      setError("Loan must at least be 10.000 USD")
    } else if (value > 1_000_000) {
      setError("This is too much!")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Amount of loan:</h2>
      <div className="flex items-center justify-center">
        <NumberInput
          placeholder={"Please insert the amount of the loan"}
          name={"loanAmount"}
          onChange={validate}
          value={formData.loanAmount}
          required={true}
        />
        <span className="pl-2 text-xl">USD</span>
      </div>
    </>
  )
}
