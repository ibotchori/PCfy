import BackArrow from 'components/Buttons/BackArrow'
import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTitle = ({ path }) => {
  const location = useLocation()
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
        <BackArrow path={path} />
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
