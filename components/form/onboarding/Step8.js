import TextInput from '../TextInput'

export default function Step9({ onChange, setError, formData }) {

  const validate = (e) => {
    const { name, value } = e.target
    if (value.length > 10) {
      setError("Come on!")
    } else {
      setError("")
      onChange(e)
    }
  }

  return (
    <>
      <h1>One more thing</h1>
      <h2 className="my-6">What is your first name?</h2>
      <TextInput
        value={formData.firstName}
        name={"firstName"}
        label={"First name"}
        placeholder={"Thomas"}
        onChange={validate}
        required={true}
      />
    </>
  )
}
