import React from 'react'

const Select = ({ label, id, options, register, name, disabled, error }) => {
  return (
    <div className='mb-6'>
      <select
        disabled={disabled}
        {...register(name)}
        id={id}
        name={name}
        className={`${
          error ? 'border-red-500 ' : ''
        }bg-gray-200 text-gray-900 border rounded-lg    focus:outline-none  font-bold  block w-full p-[11px] `}
      >
        <option value=''>{label}</option>
        {options?.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          )
        })}
      </select>
      {/*      <div className='h-[0.1px] flex text-[10px] sm:text-xs '>
        <p className='pt-[6px] pl-1 text-gay-600'>
          მინიმუმ 2 სიმბოლო, ქართული ასოები
        </p>
      </div> */}
    </div>
  )
}

export default Select
