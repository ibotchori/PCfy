import { LandingImage, LandingImageMob, Redberry } from 'assets'
import { Button } from 'components'
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
        <Button text='ჩანაწერის დამატება' path='/employ-info' px={20} />
        <Button text='ჩანაწერების სია' path='/laptop-list' px={20} />
      </div>
    </div>
  )
}

export default Landing
