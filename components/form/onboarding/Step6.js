import { useState } from 'react'
import RadioButtons from '../RadioButtons'
import TextArea from '../TextArea'

export default function Step7({ onChange, formData }) {

  const values = [
    "Excellent - No Issues",
    "Average - Paid default <$1000",
    "Fair - Multiple defaults",
    "Poor - Let's talk",
  ]
  const condition = values[3]
  const [textareaOpen, setTextareaOpen] = useState(formData.creditHistory === condition)

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
      <h1>What is your current credit history?</h1>
      <h2 className="my-6">This helps us match the best loan for your scenario</h2>
      <RadioButtons
        name={"creditHistory"}
        values={values}
        checked={formData.creditHistory}
        onChange={validate}
      />

      { textareaOpen &&
        <TextArea
          value={formData.creditHistoryAddon}
          name={"creditHistoryAddon"}
          placeholder="Feel free to explain a bit further (optional)"
          onChange={onChange}
          required={false}
        />
      }
    </>
  )
}
