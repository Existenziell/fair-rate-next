import RadioButtons from '../RadioButtons'

export default function Step5({ onChange, formData }) {

  const values = [
    "I will live there",
    "It's an investment",
  ]

  return (
    <>
      <h1>How will the property be used?</h1>
      <h2 className="my-6">{''}</h2>
      <RadioButtons
        name={"PropertyUsage"}
        values={values}
        checked={formData.PropertyUsage}
        onChange={onChange}
      />
    </>
  )
}
