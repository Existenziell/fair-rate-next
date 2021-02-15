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
          background: ${icon ? `url('/icons/svg/outline/${icon}.svg') no-repeat 5% center` : `none`};
          background-size: ${isPromo ? '12%' : '8%'};
        }
      `}</style>
    </>
  )
}

export default Button
