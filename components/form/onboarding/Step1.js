import NumberInput from '../NumberInput'

export default function Step1({ onChange, setError, formData }) {

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
      <h1>What is the expected purchase price?</h1>
      <h2 className="my-6">Your best guess is OK</h2>
      <NumberInput
        name={"purchasePrice"}
        value={formData.purchasePrice}
        label={"Purchase Price"}
        placeholder={"150.000"}
        onChange={validate}
        suffix={"$"}
        required={true}
      />
    </>
  )
}
