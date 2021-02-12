import TextInput from '../TextInput'
import NumberInput from '../NumberInput'
import Select from '../Select'
import states from '../states.json'

export default function Step6({ onChange, setError, formData }) {

  const validate = (e) => {
    const zipLength = e.target.value.length
    if (zipLength > 5 || zipLength < 5) {
      setError("ZIP codes are usually 5 numbers long")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">II. Property Information and purpose of loan</h1>
      <h2 className="my-8 text-2xl">Subject Property Address:</h2>

      <TextInput
        value={formData.propertyAddressStreet}
        name={"propertyAddressStreet"}
        label={"Street"}
        placeholder={"Lombard Street"}
        onChange={onChange}
        required={true}
      />

      <TextInput
        value={formData.propertyAddressCity}
        name={"propertyAddressCity"}
        label={"City"}
        placeholder={"San Francisco"}
        onChange={onChange}
        required={true}
      />

      <Select
        values={states}
        name={"propertyAddressState"}
        label={"State"}
        placeholder={"Please select your option"}
        onChange={onChange}
        selected={formData.propertyAddressState}
        required={true}
      />

      <NumberInput
        placeholder={"94111"}
        name={"propertyAddressZip"}
        label={"ZIP Code"}
        onChange={validate}
        value={formData.propertyAddressZip}
        required={true}
      />
    </>
  )
}
