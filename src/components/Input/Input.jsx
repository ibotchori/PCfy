import React from 'react'

const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor={label}
        className='block mb-2 text-base font-bold text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
      <div className='relative'>
        {/* {dirtyFields && !errorMessage && (
          <svg
            className='absolute right-1 mt-4 mr-2'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z'
              fill='#249E2C'
            />
          </svg>
        )} */}
        <input
          type={type}
          id={id}
          className={`bg-gray-50 text-gray-900 text-sm rounded-lg border-blue-200 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300  block w-full p-3 border  `}
          placeholder={placeholder}
          // {...register(name)}
        />
      </div>
      {/* Error */}
      <div className='h-[0.1px] flex text-[10px] sm:text-xs '>
        <p className='pt-[6px] pl-1 text-gay-600'>
          მინიმუმ 2 სიმბოლო, ქართული ასოები
        </p>
      </div>
    </div>
  )
}

export default Input
