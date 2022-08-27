import React from 'react'
import { Logo } from 'assets'

const MainLogo = () => {
  return (
    <div className=' m-auto py-10 hidden sm:block '>
      <img src={Logo} alt='Logo' className='w-14' />
    </div>
  )
}

export default MainLogo
