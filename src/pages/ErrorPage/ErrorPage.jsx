import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
      <h1 className='text-9xl font-extrabold text-white tracking-widest'>
        404
      </h1>
      <div className='bg-redberryColor px-2 text-sm rounded rotate-12 absolute'>
        დაფიქსირდა შეცდომა
      </div>
      <button className='mt-5'>
        <Link
          to='/'
          className='relative inline-block text-sm font-medium text-redberryColor group active:text-orange-500 focus:outline-none focus:ring'
        >
          <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-redberryColor group-hover:translate-y-0 group-hover:translate-x-0' />
          <span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
            მთვარი გვერდი
          </span>
        </Link>
      </button>
    </main>
  )
}

export default ErrorPage
