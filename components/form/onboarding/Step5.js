import RadioButtons from '../RadioButtons'

export default function Step6({ onChange, formData }) {

  const values = [
    "Principal and Interest",
    "Interest Only",
    "Still deciding",
  ]

  return (
    <>
      <h1>How would you like to repay the loan?</h1>
      <h2 className="my-6">{''}</h2>
      <RadioButtons
        name={"repaymentMethod"}
        values={values}
        checked={formData.repaymentMethod}
        onChange={onChange}
      />
    </>
  )
}
