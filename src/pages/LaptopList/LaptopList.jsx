/* eslint-disable jsx-a11y/no-redundant-roles */
import { GoBackButton } from 'components'
import BackArrow from 'components/Buttons/BackArrow'
import React from 'react'
import { Link } from 'react-router-dom'
import { laptops } from './data'

const LaptopList = () => {
  return (
    <div className='min-h-screen w-full '>
      <div className='absolute'>
        <GoBackButton path={'/'} />
      </div>

      <div className='flex flex-col items-center justify-center py-5 sm:py-10'>
        <div className='flex'>
          <p className='font-bold text-lg sm:text-3xl'>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</p>
          <div className='sm:hidden block'>
            {' '}
            <BackArrow path={'/'} />
          </div>
        </div>

        <div className=' items-center flex justify-center py-5 sm:py-20 '>
          <ul
            role='list'
            className='grid grid-cols-1 gap-8 sm:grid-cols-2 px-4'
          >
            {laptops.map((laptop) => (
              <li
                key={laptop.email}
                className='col-span-1 bg-cardBGColor rounded-lg shadow divide-y divide-gray-200'
              >
                <div className='w-full flex items-center justify-between p-[0.45rem] mr-12 space-x-3 sm:space-x-6'>
                  <img
                    className='w-40 h-28 rounded-lg   bg-gray-300  flex-shrink-0 '
                    src={laptop.imageUrl}
                    alt='PC'
                  />
                  <div className='flex-1 truncate'>
                    <div className='flex items-center space-x-3'>
                      <h3 className='text-gray-900 text-sm font-medium truncate'>
                        {laptop.name}
                      </h3>
                    </div>
                    <p className='mt-1 pb-4 text-gray-500 text-sm truncate'>
                      {laptop.title}
                    </p>
                    <Link
                      to={'/laptop-details'}
                      className={`cursor-pointer pb-3 pt-6 sm:pt-0 rounded-lg  text-center  text-xs  tracking-wide text-mainButtonColor hover:text-hoverButtonColor  focus:text-focusButtonColor font-semibold underline`}
                    >
                      {laptop.role}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LaptopList
