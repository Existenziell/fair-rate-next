import NumberInput from '../NumberInput'

export default function Step4({ onChange, formData, setError }) {

  const validate = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "loanAmount": {
        if (value < 10_000) {
          setError("Minimum loan is 10.000 USD")
        } else if (value > 100_000_000) {
          setError("This is a bit too much")
        } else {
          setError("")
          onChange(e)
        }
        break
      }
      case "interestRate": {
        if (value > 20 || value < 1) {
          setError("This kind of interest rate is highly unlikely")
        } else {
          setError("")
          onChange(e)
        }
        break
      }
      case "numberOfMonths": {
        if (value > 1000 || value < 1) {
          setError("We don't believe that.")
        } else {
          setError("")
          onChange(e)
        }
        break
      }
      default: {
        setError("")
        onChange(e)
      }
    }
  }

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Loan Details:</h2>

      <NumberInput
        name={"loanAmount"}
        value={formData.loanAmount}
        label={"Amount of loan"}
        placeholder={"150.000"}
        onChange={validate}
        suffix={"$"}
        required={true}
      />

      <NumberInput
        name={"interestRate"}
        value={formData.interestRate}
        label={"Interest Rate"}
        placeholder={"2.45"}
        onChange={validate}
        suffix={"%"}
        required={true}
      />

      <NumberInput
        name={"numberOfMonths"}
        value={formData.numberOfMonths}
        label={"Number of months"}
        placeholder={"24"}
        onChange={validate}
        suffix={"month(s)"}
        required={true}
      />
    </>
  )
}
