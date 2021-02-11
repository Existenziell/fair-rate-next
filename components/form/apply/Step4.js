import TextInput from '../TextInput'

export default function Step4({ onChange, formData }) {

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Lender Case Number:</h2>
      <TextInput
        placeholder={"Please insert your lender case number"}
        name={"lenderCaseNumber"}
        onChange={onChange}
        value={formData.lenderCaseNumber}
        required={true}
      />
    </>
  )
}
