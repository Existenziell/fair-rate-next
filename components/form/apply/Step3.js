import TextInput from '../TextInput'

export default function Step3({ onChange, formData }) {

  return (
    <>
      <h1 className="text-base text-gray-400">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Agency Case Number:</h2>
      <TextInput
        placeholder={"Please intert your agency case number"}
        name={"agencyCaseNumber"}
        onChange={onChange}
        value={formData.agencyCaseNumber}
        required={true}
      />
    </>
  )
}
