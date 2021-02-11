const TextArea = ({ value, name, placeholder, onChange, required }) => {

  return (
    <label htmlFor={name} className="w-full mb-8">
      <textarea
        name={name}
        id={name}
        onChange={onChange}
        defaultValue={value}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-300 rounded shadow-md px-6 py-4 h-64 focus:shadow-inner"
      >
      </textarea>
    </label>
  )
}

export default TextArea
