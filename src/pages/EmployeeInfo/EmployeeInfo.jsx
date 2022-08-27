import { GoBackIcon } from 'assets'
import { MainLogo } from 'components'
import React from 'react'

const EmployeeInfo = () => {
  return (
    <div className='bg-gray-100 w-full h-screen flex flex-col justify-between'>
      {/* Go Back Button */}
      <div className='pl-8 pt-5 hidden sm:block'>
        <img src={GoBackIcon} alt='Go Back Button' className='w-10' />
      </div>
      {/* Title */}
      <div className='flex w-full justify-center gap-16 pb-5 font-semibold '>
        <div>
          <p className=''>თანამშრომლის ინფო</p>
          <div className='w-[80%] bg-gray-600 h-[3px] m-auto mt-2'></div>
        </div>
        <div>
          <p>ლეპტოპის მახასიათებლები</p>
          <div className='w-[80%] bg-gray-600 h-[3px] m-auto mt-2'></div>
        </div>
      </div>
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
