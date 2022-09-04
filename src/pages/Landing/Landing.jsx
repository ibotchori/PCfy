import { LandingImage, LandingImageMob, Redberry } from 'assets'
import { LinkButton } from 'components'

import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-screen  flex flex-col justify-between items-center'>
      <div className='pt-14'>
        <img src={Redberry} alt='Redberry' />
      </div>
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
      <div className='flex flex-col gap-3 sm:gap-6 pb-7 sm:pb-24'>
        <LinkButton
          text='ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ'
          path='/employ-info'
          px='px-[4rem]'
        />
        <LinkButton text='ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ' path='/laptop-list' px='px-[4rem]' />
      </div>
    </div>
  )
}

export default Landing
