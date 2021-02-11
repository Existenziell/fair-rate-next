import NumberInput from '../NumberInput'

export default function Step10({ onChange, setError, formData }) {

  const validate = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "propertyNumberOfUnits": {
        if (value > 1000 || value < 1) {
          setError("Sure?")
        } else {
          setError("")
          onChange(e)
        }
        break
      }
      case "propertyYearBuilt": {
        if (value > 2030 || value < 1800) {
          setError("The house must have been built after 1800")
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
      <h1 className="text-base text-gray-400 mt-6">II. Property Information and purpose of loan</h1>
      <h2 className="my-8 text-2xl">Subject Property Details:</h2>

      <NumberInput
        placeholder={"Property consists of how many units"}
        name={"propertyNumberOfUnits"}
        label={"Number of Units"}
        onChange={validate}
        value={formData.propertyNumberOfUnits}
        required={true}
      />

      <NumberInput
        placeholder={"2004"}
        name={"propertyYearBuilt"}
        label={"Year built"}
        onChange={validate}
        value={formData.propertyYearBuilt}
        required={true}
      />
    </>
  )
}
