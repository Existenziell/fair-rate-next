const Button = ({ text, size, modifier }) => {

  return (
    <>
      <button
        type="button"
        className={`button ${modifier}`}
        style={{ width: size ? `${size}px` : `auto` }
        }
      >
        {text}
      </button>
    </>
  )
}

export default Button
