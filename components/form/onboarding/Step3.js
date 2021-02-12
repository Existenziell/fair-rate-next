import RadioButtons from '../RadioButtons'

export default function Step4({ onChange, formData }) {

  const values = [
    "Ready to or just made an offer",
    "Actively looking for a home",
    "Plan to buy in 6 months or so",
    "Just exploring loan options",
  ]

  return (
    <>
      <h1>What best describes your home buying situation?</h1>
      <h2 className="my-6">{''}</h2>
      <RadioButtons
        name={"buyingSituation"}
        values={values}
        checked={formData.buyingSituation}
        onChange={onChange}
      />
    </>
  )
}
