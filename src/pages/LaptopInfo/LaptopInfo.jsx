import React from 'react'
import {
  Button,
  GoBackButton,
  Input,
  MainLogo,
  PageTitle,
  Select,
} from 'components'
import { Link } from 'react-router-dom'
import RadioButton from 'components/RadioButton/RadioButton'

const LaptopInfo = () => {
  return (
    <div className='bg-gray-100 w-full h-full flex flex-col justify-between'>
      {/* Go Back Button */}
      <GoBackButton path='/employ-info' />
      {/* Title */}
      <PageTitle path='/employ-info' />
      {/* Main Content */}
      <div className='flex justify-center h-full'>
        <form className=' w-full sm:w-[60%]  bg-white rounded-xl  lg:px-28 pt-8 sm:pt-20 '>
          <div className='divide-y-[16px] sm:divide-y-2 sm:divide-gray-200 divide-gray-100'>
            {/* Divide 1 */}
            <div className=''>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='ლეპტოპის სახელი' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem] pt-7'>
                  <Select label='ლეპტოპის ბრენდი' />
                </div>
              </div>
            </div>
            {/* Divide 2 */}
            <div className='pt-4 ms:pt-10 pb-0 sm:pb-2'>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem] pt-7'>
                  <Select label='CPU' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='CPU-ს ბირთვი' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='CPU-ს ნაკადი' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='ლეპტოპის RAM (GB)' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <RadioButton
                    label='მეხსიერების ტიპი'
                    value1='SSD'
                    value2='HDD'
                  />
                </div>
              </div>
            </div>
            {/* Divide 3*/}
            <div className='pt-10 pb-5'>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-14'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='შეძენის რიცხვი (არჩევითი)' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='ლეპტოპის ფასი' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-14'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <RadioButton
                    label='ლეპტოპის მდგომარეობა'
                    value1='ახალი'
                    value2='მეორადი'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='flex w-full justify-between pb-14'>
            <Link
              to='/employ-info'
              className={`pl-4 lg:pl-0  rounded-lg  text-center  text-lg  tracking-wide text-mainButtonColor hover:text-hoverButtonColor  focus:text-focusButtonColor font-semibold`}
            >
              უკან
            </Link>
            <div className=' pr-3 lg:pr-0   '>
              <Button text='დამახსოვრება' path='/laptop-info' px='px-10' />
            </div>
          </div>
        </form>
      </div>

      {/* Redberry Logo */}
      <MainLogo />
    </div>
  )
}

export default LaptopInfo
