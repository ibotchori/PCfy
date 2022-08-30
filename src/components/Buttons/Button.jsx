import React from 'react'

const Button = ({ text, path, px }) => {
  return (
    <button
      type='submit'
      to={path}
      className={`${px} py-3  bg-mainButtonColor hover:bg-hoverButtonColor  focus:bg-focusButtonColor  rounded-lg  text-center  text-lg  tracking-wide text-white  font-semibold`}
    >
      {text}
    </button>
  )
}

export default Button
