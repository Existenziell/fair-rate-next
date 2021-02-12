import { useState } from 'react'
import RadioButtons from '../RadioButtons'
import TextArea from '../TextArea'

export default function Step2({ onChange, setError, formData }) {

  const values = ["VA", "Conventional", "FHA", "USDA / Rural Housing Service", "Other (explain)"]
  const condition = values[4]
  const [textareaOpen, setTextareaOpen] = useState(formData.mortgageType === condition)

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
      <h2 className="my-8 text-2xl">Mortgage Applied for:</h2>

      <RadioButtons
        name={"mortgageType"}
        values={values}
        checked={formData.mortgageType}
        onChange={validate}
      />

      { textareaOpen &&
        <TextArea
          value={formData.mortgageTypeAddon}
          name={"mortgageTypeAddon"}
          placeholder="More space to describe your case."
          onChange={onChange}
          required={false}
        />
      }
    </>
  )
}
