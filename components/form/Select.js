const Select = ({ values, name, label, placeholder, onChange, selected }) => {

  if (selected === undefined) selected = 'choose'

  return (
    <label htmlFor={name} className="overlap mb-4">
      <span>{label}</span>

      <select
        id={name}
        name={name}
        defaultValue={selected}
        className='state-select'
        onChange={(e) => onChange(e)}
        className="w-full border border-gray-300 rounded shadow-md px-6 py-4"
      >

        <option value={"choose"} disabled>{placeholder}</option>
        {values.map((item, index) => {
          return (
            <option key={item.abbreviation} value={item.abbreviation} name={name}>
              {item.name}
            </option>
          )
        })}
      </select>
    </label>
  )
}

export default Select
