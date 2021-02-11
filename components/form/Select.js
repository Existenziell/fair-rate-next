const Select = ({ values, name, label, placeholder, onChange, selected }) => {

  if (selected === undefined) selected = 'choose'

  return (
    <>
      <label htmlFor={name} className="state-select-label inline shadow-md">
        <span>{label}</span>

        <select
          id={name}
          name={name}
          defaultValue={selected}
          className='state-select'
          onChange={(e) => onChange(e)}>

          <option value={"choose"} className="first" disabled>{placeholder}</option>
          {values.map((item, index) => {
            return (
              <option key={item.abbreviation} value={item.abbreviation} name={name}>
                {item.name}
              </option>
            )
          })}
        </select>
      </label>

      <style jsx>{`
        .state-select {
          border: 1px solid #ccc;
          outline: 0;
          font-size: 16px;
          border-radius: 3px;
          text-shadow: 1px 1px 0 white;
          box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px white;
          padding: 20px;
          width: 400px;
          box-sizing: border-box;
          transition: all 0.2s ease-in-out;
          appearance: none;
          margin-bottom: 10px;
        }
        .state-select:focus {
          box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px white;
        }
        .state-select-label {
          height: 65px;
        }
        .first {
          color: #a9a9a9;
        }
      `}</style>
    </>
  )
}

export default Select
