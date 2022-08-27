import { BackArrow } from 'assets'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PageTitle = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
      {/* Desktop */}
      <div className='sm:block hidden'>
        <div className='flex w-full justify-center gap-16 pb-5 font-semibold'>
          <div>
            <p>თანამშრომლის ინფო</p>
            {location.pathname === '/employ-info' && (
              <div className='w-[80%] bg-gray-600 h-[3px] m-auto mt-2 hidden sm:block'></div>
            )}
          </div>
          <div>
            <p>ლეპტოპის მახასიათებლები</p>
            {location.pathname === '/laptop-info' && (
              <div className='w-[80%] bg-gray-600 h-[3px] m-auto mt-2 hidden sm:block'></div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='m-auto py-3 sm:hidden block mt-3 '>
        <img
          onClick={() => navigate(-1)}
          src={BackArrow}
          alt='Back Arrow'
          className='absolute left-0 pt-[6px] pl-5 cursor-pointer'
        />
        <p className='font-semibold text-[1rem] '>
          {location.pathname === '/employ-info'
            ? 'თანამშრომლის ინფო'
            : 'ლეპტოპის მახასიათებლები'}
        </p>
        <p className='text-center text-gray-500 text-sm'>
          {location.pathname === '/employ-info' ? '1/2' : '2/2'}
        </p>
      </div>
    </>
  )
}

export default PageTitle
