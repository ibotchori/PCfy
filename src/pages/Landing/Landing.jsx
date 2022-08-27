import { LandingImage, LandingImageMob, Redberry } from 'assets'
import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-screen  flex flex-col justify-between items-center'>
      {/* Redberry Title */}
      <div className='pt-14'>
        <img src={Redberry} alt='Redberry' />
      </div>
      {/* Main Image */}
      <div>
        <img
          className='hidden sm:block w-[95%] pl-24 pb-10'
          src={LandingImage}
          alt='LandingImg'
        />
        <img
          className='block sm:hidden'
          src={LandingImageMob}
          alt='LandingImg-mob'
        />
      </div>
      {/* Buttons */}
      <div className='flex flex-col gap-3 sm:gap-6 pb-7 sm:pb-24'>
        <button
          className={`px-16 py-4 sm:py-3 bg-[#62A1EB]   rounded-lg  text-center  text-lg  tracking-widest text-white hover:text-gray-100`}
        >
          ჩანაწერის დამატება
        </button>
        <button
          className={`px-16 py-4 sm:py-3 bg-[#62A1EB]   rounded-lg  text-center  text-lg  tracking-widest text-white hover:text-gray-100`}
        >
          ჩანაწერების სია
        </button>
      </div>
    </div>
  )
}

export default Landing
