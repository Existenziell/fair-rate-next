import NumberInput from '../NumberInput'

export default function Step4({ onChange, formData }) {

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Lender Case Number:</h2>
      <NumberInput
        name={"lenderCaseNumber"}
        label={"Lender Case Number"}
        value={formData.lenderCaseNumber}
        placeholder={"10 digit number"}
        onChange={onChange}
        required={true}
      />
    </>
  )
}
