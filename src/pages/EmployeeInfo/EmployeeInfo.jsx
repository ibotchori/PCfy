import {
  Button,
  GoBackButton,
  Input,
  MainLogo,
  PageTitle,
  Select,
} from 'components'
import React from 'react'

const EmployeeInfo = () => {
  return (
    <div className='bg-gray-100 w-full h-full flex flex-col justify-between'>
      {/* Go Back Button */}
      <GoBackButton />
      {/* Title */}
      <PageTitle />
      {/* Main Content */}
      <div className='flex justify-center h-full'>
        <form className=' w-full sm:w-[60%]  bg-white rounded-xl  lg:px-28 pt-8 sm:pt-20 '>
          <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input label='სახელი' />
            </div>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input label='გვარი' />
            </div>
          </div>
          <div className='flex justify-between flex-col gap-4 w-[21.875rem] sm:w-[25rem] lg:w-full m-auto'>
            <Select label='თიმი' />
            <Select label='პოზიცია' />
          </div>
          <div className=' w-[21.875rem] sm:w-[25rem] lg:w-full m-auto pt-0 lg:pt-5 pb-10 lg:pb-24 gap-3 sm:gap-8 flex flex-col '>
            <Input label='მეილი' />
            <Input label='ტელეფონის ნომერი' />
          </div>

          <div className='w-full flex pr-3 lg:pr-0  pb-14 justify-end'>
            <Button text='შემდეგი' path='/laptop-info' px={10} />
          </div>
        </form>
      </div>

      {/* Redberry Logo */}
      <MainLogo />
    </div>
  )
}

export default EmployeeInfo
