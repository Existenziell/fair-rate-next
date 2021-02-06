const RadioButton = ({ values, name }) => {

  return (
    <>
      {values.map((value, index) => {
        return (
          <label htmlFor={value} className="my-4 w-full" key={index}>
            <input type="radio" value={value} name={name} id={value} />
            <div className="option-inner flex p-4 items-center justify-end flex-row-reverse">
              <span className="pl-4">{value}</span>
              <i></i>
            </div>
          </label>
        )
      })}

      <style jsx>{`
        label {
          cursor: pointer;         
          user-select: none;
          transition: border-color .1s;
        }
        label:hover i {
          border: 1px solid #B7B7B7;
        }
        input {
          position: absolute;
          opacity: 0;
          top: -20px;
          left: -20px;
        }
        label input:checked ~ div > i {
          background-color: rgb(255, 0, 131);
        }
        .option-inner {
          border-radius: 5px;
          background: #F7F7F7;
        }
        span {
          font-family: 'Lato', sans-serif;
          color: #4A4A4A;
          font-weight: 700;
          text-transform: uppercase;
        }
        i {
          width: 30px;
          height: 30px;
          border: 15px #fff solid;
          background: transparent;
          border-width: 5px;
          border-radius: 50%;
          box-shadow: 0 0 0 1px #ececec;
          background: white;
          flex-shrink: 0;
          transition: border-width .1s, box-shadow .1s;
        }
      `}</style>
    </>
  )
}

export default RadioButton
