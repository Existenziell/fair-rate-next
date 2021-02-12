const Button = ({ text, size, modifier, icon }) => {

  let isPromo
  if (modifier) {
    isPromo = modifier.includes('promo')
  }

  return (
    <>
      <button
        type="button"
        className={`button bg-white ${modifier} ${icon ? 'icon' : ''}`}
        style={{ width: size ? `${size}px` : `auto` }}
      >
        {text}
      </button>

      <style jsx>{`
        button {
          background: url('/icons/bg/${icon}.svg') no-repeat 5% center;
          background-size: ${isPromo ? '12%' : '8%'};
          // background-color: white;
        }
      `}</style>
    </>
  )
}

export default Button
