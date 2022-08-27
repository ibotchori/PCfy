import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, path }) => {
  return (
    <Link
      to={path}
      className={`px-20 py-4 sm:py-3 bg-mainButtonColor   rounded-lg  text-center  text-lg  tracking-wide text-white hover:text-gray-100 font-semibold`}
    >
      {text}
    </Link>
  )
}

export default Button
