import React from 'react'

const Input = ({
  label,
  type,
  id,
  placeholder,
  errorMessage,
  name,
  register,
  dirtyFields,
  hint,
}) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor={label}
        className={`block mb-2  font-bold text-gray-900 ${
          errorMessage ? 'text-red-500' : ' '
        }`}
      >
        {label}
      </label>
      <div className='relative'>
        {dirtyFields && !errorMessage && (
          <svg
            className='absolute right-1 mt-3 mr-2'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z'
              fill='#23FF39'
            />
          </svg>
        )}
        <input
          type={type}
          id={id}
          className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:border-blue-300  focus:ring-blue-300 focus:outline-none  focus:ring-1 block w-full p-3 border  ${
            errorMessage
              ? 'border-red-500 focus:border-red-500  focus:ring-red-500'
              : dirtyFields && !errorMessage
              ? 'border-blue-500 '
              : 'border-gray-300 '
          } `}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {/* Error */}

      {errorMessage ? (
        <div className='h-[0.1px] flex text-[10px] sm:text-xs '>
          <p className='pt-[6px] pl-1 text-gay-600 text-red-500'>
            {errorMessage}
          </p>
        </div>
      ) : (
        <div className='h-[0.1px] flex text-[10px] sm:text-xs '>
          <p className='pt-[6px] pl-1 text-gay-600'>{hint}</p>
        </div>
      )}
    </div>
  )
}

export default Input
