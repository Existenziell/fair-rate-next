const TextArea = ({ value, name, placeholder, onChange, required }) => {

  return (
    <>
      <label htmlFor={name} className="w-full shadow-md">
        <textarea
          name={name}
          id={name}
          onChange={onChange}
          defaultValue={value}
          placeholder={placeholder}
          required={required}
        >
        </textarea>
      </label>

      <style jsx>{`
        textarea {
          min-height: 150px;
          width: 100%;
          border-radius: 4px;
          margin: 4px 0px 20px;
          resize: none;
          padding: 20px;
          padding-bottom: 14px;
          appearance: none;
        }
      `}</style>

    </>
  )
}

export default TextArea
