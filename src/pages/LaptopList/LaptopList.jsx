import { GoBackButton } from 'components'
import BackArrow from 'components/Buttons/BackArrow'
import { fetchLaptops } from 'features/laptopInfo/laptopInfoSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const LaptopList = () => {
  const dispatch = useDispatch()
  const { fetchedLaptops } = useSelector((state) => state.laptopInfo)

  // fetch data
  useEffect(() => {
    dispatch(fetchLaptops())
  }, [dispatch])
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
            {fetchedLaptops.map((laptop) => (
              <li
                key={laptop.id}
                className='col-span-1 bg-cardBGColor rounded-lg shadow divide-y divide-gray-200'
              >
                <div className='w-full flex items-center justify-between p-[0.45rem] mr-12 space-x-3 sm:space-x-6'>
                  <img
                    className='w-40 h-28 rounded-lg object-cover object-center  bg-gray-300  flex-shrink-0 '
                    src={`https://pcfy.redberryinternship.ge/${laptop.laptop.image}`}
                    alt='PC'
                  />
                  <div className='flex-1 truncate'>
                    <div className='flex items-center space-x-3'>
                      <h3 className='text-gray-900 text-sm font-medium truncate'>
                        {`${laptop.user.name} ${laptop.user.surname} `}
                      </h3>
                    </div>
                    <p className='mt-1 pb-4 text-gray-500 text-sm truncate'>
                      {laptop.laptop.name}
                    </p>
                    <Link
                      to={'/laptop-details'}
                      className={`cursor-pointer pb-3 pt-6 sm:pt-0 rounded-lg  text-center  text-xs  tracking-wide text-mainButtonColor hover:text-hoverButtonColor  focus:text-focusButtonColor font-semibold underline`}
                    >
                      მეტის ნახვა
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
