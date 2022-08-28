import { SuccessImage } from 'assets'
import { Button } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'

const Successful = () => {
  return (
    <div className='w-full h-screen sm:bg-successBGColor bg-white  flex items-center justify-center '>
      <div className='h-[33.563rem] w-[52.938rem] bg-white rounded-md flex flex-col justify-evenly items-center  '>
        <div className='pt-28 sm:pt-0'>
          <img src={SuccessImage} alt='Successful' />
        </div>
        <div className='px-20 text-center'>
          <p className='font-bold text-2xl pb-44 sm:pb-16'>
            ჩანაწერი დამატებულია!
          </p>
        </div>

        <Button text={'სიაში გადაყვანა'} path='/laptop-list' px='px-20' />
        <Link
          to='/'
          className={`pb-3 pt-6 sm:pt-0 rounded-lg  text-center  text-lg  tracking-wide text-mainButtonColor hover:text-hoverButtonColor  focus:text-focusButtonColor font-semibold`}
        >
          მთავარი
        </Link>
      </div>
    </div>
  )
}

export default Successful
