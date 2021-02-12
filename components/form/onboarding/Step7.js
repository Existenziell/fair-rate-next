import { useState } from 'react'
import RadioButtons from '../RadioButtons'
import TextArea from '../TextArea'

export default function Step8({ onChange, formData }) {

  const values = ["Employee", "Self Employed", "Other"]
  const condition = values[2]
  const [textareaOpen, setTextareaOpen] = useState(formData.employmentType === condition)

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
      <h1>What is your employment type?</h1>
      <h2 className="my-6">{''}</h2>
      <RadioButtons
        name={"employmentType"}
        values={values}
        checked={formData.employmentType}
        onChange={validate}
      />

      { textareaOpen &&
        <TextArea
          value={formData.employmentTypeAddon}
          name={"employmentTypeAddon"}
          placeholder="Feel free to explain a bit further (optional)"
          onChange={onChange}
          required={false}
        />
      }
    </>
  )
}
