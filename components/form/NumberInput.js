const NumberInput = ({ value, name, placeholder, onChange, required }) => {
  return (
    <>
      <label htmlFor={name}>
        <input
          type="number"
          name={name}
          id={name}
          defaultValue={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </label>

      <style jsx>{`
        input {
          border: 1px solid #ccc;
          outline: 0;
          font-size: 16px;
          border-radius: 3px;
          text-shadow: 1px 1px 0 white;
          box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px white;
          padding: 20px 25px;
          width: 400px;
          box-sizing: border-box;
          transition: all 0.2s ease-in-out;
          appearance: none;
        }
        input:focus {
          box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px white;
        }
        label:not(:last-of-type) {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  )
}

export default NumberInput
