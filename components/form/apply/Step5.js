import { useState } from 'react'
import RadioButtons from '../RadioButtons'
import TextArea from '../TextArea'

export default function Step5({ onChange, setError, formData }) {

  const values = ["Fixed Rate", "GPM", "ARM (type)", "Other (explain)"]
  const condition = values[3]
  const [textareaOpen, setTextareaOpen] = useState(formData.amortizationType === condition)

  const validate = (e) => {
    const { name, value } = e.target
    if (value === condition) {
      setTextareaOpen(true)
    } else {
      setTextareaOpen(false)
    }
    onChange(e)
  }

  return (
    <>
      <h1 className="text-base text-gray-400 mt-6">I. Type of mortgage and terms of loan</h1>
      <h2 className="my-8 text-2xl">Amortization Type:</h2>

      <RadioButtons
        name={"amortizationType"}
        values={values}
        checked={formData.amortizationType}
        onChange={validate}
      />

      { textareaOpen &&
        <TextArea
          value={formData.amortizationTypeAddon}
          name={"amortizationTypeAddon"}
          placeholder="More space to describe your case."
          onChange={onChange}
          required={false}
        />
      }
    </>
  )
}
