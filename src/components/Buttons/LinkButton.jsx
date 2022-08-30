import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ text, path, px }) => {
  return (
    <Link
      to={path}
      className={`${px} py-3  bg-mainButtonColor hover:bg-hoverButtonColor  focus:bg-focusButtonColor  rounded-lg  text-center  text-lg  tracking-wide text-white  font-semibold`}
    >
      {text}
    </Link>
  )
}

export default LinkButton
