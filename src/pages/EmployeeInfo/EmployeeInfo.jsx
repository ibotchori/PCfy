/* eslint-disable no-unused-vars */
import {
  Button,
  GoBackButton,
  Input,
  MainLogo,
  PageTitle,
  Select,
} from 'components'
import { fetchPositions, fetchTeams } from 'features/employee/employeeSlice'
import React, { useEffect } from 'react'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
// actions

const EmployeeInfo = () => {
  const dispatch = useDispatch()
  //  Global state (Redux)
  const fetchedTeams = useSelector((state) => state.employeeInfo.fetchedTeams)
  const fetchedPositions = useSelector(
    (state) => state.employeeInfo.fetchedPositions
  )

  // fetch data
  useEffect(() => {
    dispatch(fetchTeams())
    dispatch(fetchPositions())
  }, [dispatch])

  return (
    <div className='bg-gray-100 w-full min-h-screen flex flex-col justify-between'>
      {/* Go Back Button */}
      <GoBackButton path='/' />
      {/* Title */}
      <PageTitle path='/' />
      {/* Main Content */}
      <div className='flex justify-center h-full'>
        <form className=' w-full sm:w-[60%]   bg-white rounded-xl  lg:px-28 pt-8 sm:pt-16 '>
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
          {/* Footer */}
          <div className='w-full flex pr-3 lg:pr-0  pb-14 justify-end'>
            <Button text='შემდეგი' path='/laptop-info' px='px-10' />
          </div>
        </form>
      </div>

      {/* Redberry Logo */}
      <MainLogo />
    </div>
  )
}

export default EmployeeInfo
