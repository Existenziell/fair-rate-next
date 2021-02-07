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

      <style jsx>{`
        .button {
          cursor: pointer;
          display: inline-block;
          border: 0;
          outline: 0;
          font-size: 16px;
          border-radius: 4px;
          color: white;
          font-family: 'Lato', sans-serif;
          font-weight: bold;
          box-shadow: -5px -5px 20px white, 5px 5px 20px #333;
          transition: all 0.2s ease-in-out;
          font-weight: 600;
          padding: 10px 30px;
          min-width: fit-content;
        }
        .button:hover {
          box-shadow: -2px -2px 5px white, 2px 2px 5px #333;
        }
        .button:active {
          box-shadow: inset 1px 1px 2px #333, inset -1px -1px 2px white;
        }
        .button.promo {
          font-size: 30px;
          padding: 20px 40px;
        }
        .button.primary {
          background-color: rgb(255, 0, 131);
          color: white;
        }
        .button.secondary {
          background-color: white;
          color: rgb(255, 0, 131);
        }
      `}</style>

    </>
  )
}

export default Button
