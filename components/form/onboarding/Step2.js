import NumberInput from '../NumberInput'

export default function Step3({ onChange, setError, formData }) {

  const validate = (e) => {
    const { name, value } = e.target
    if (value < 0) {
      setError("Must be a positive number")
    } else if (value > 1_000_000_000) {
      setError("Too high?")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1>How much deposit do you have?</h1>
      <h2 className="my-6">{''}</h2>
      <NumberInput
        name={"availableDeposit"}
        value={formData.availableDeposit}
        label={"Available Deposit"}
        placeholder={"30.000"}
        onChange={validate}
        suffix={"$"}
        required={true}
      />
    </>
  )
}
