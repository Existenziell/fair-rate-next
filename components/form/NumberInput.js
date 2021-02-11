const NumberInput = ({ value, name, label, placeholder, onChange, required }) => {

  return (
    <label htmlFor={name} className="overlap mb-4">
      <span>{label}</span>
      <input
        type="number"
        name={name}
        id={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded shadow-md px-6 py-4"
      />
    </label>
  )
}

export default NumberInput
