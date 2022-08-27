import React from 'react'
import { GoBackIcon } from 'assets'
import { useNavigate } from 'react-router-dom'

const GoBackButton = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(-1)} className='pl-8 pt-5 hidden sm:block'>
      <img
        src={GoBackIcon}
        alt='Go Back Button'
        className='w-10 cursor-pointer hover:bg-gray-500 rounded-full'
      />
    </div>
  )
}

export default GoBackButton
