import { GoBackButton, MainLogo, PageTitle } from 'components'
import React from 'react'

const EmployeeInfo = () => {
  return (
    <div className='bg-gray-100 w-full h-screen flex flex-col justify-between'>
      {/* Go Back Button */}
      <GoBackButton />
      {/* Title */}
      <PageTitle />
      {/* Main Content */}
      <div className='flex justify-center h-full'>
        <form className=' w-full sm:w-[60%]  bg-white rounded-xl '></form>
      </div>

      {/* Redberry Logo */}
      <MainLogo />
    </div>
  )
}

export default EmployeeInfo
