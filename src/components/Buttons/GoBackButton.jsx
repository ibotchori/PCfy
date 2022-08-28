import React from 'react'
import { GoBackIcon } from 'assets'
import { Link } from 'react-router-dom'

const GoBackButton = ({ path }) => {
  return (
    <Link to={path} className='pl-8 pt-5 hidden sm:block'>
      <img
        src={GoBackIcon}
        alt='Go Back Button'
        className='w-10 cursor-pointer hover:bg-gray-500 rounded-full'
      />
    </Link>
  )
}

export default GoBackButton
