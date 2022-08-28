import React from 'react'

const RadioButton = ({ label, value1, value2 }) => {
  return (
    <div className='flex justify-center flex-col gap-5 pb-8'>
      <p className=' font-bold max-w-lg'>{label}</p>
      <div className='flex gap-10'>
        <div className='form-check'>
          <input
            className='rounded-full appearance-none  h-5 w-5 border-2  border-radioButtonColor bg-white checked:bg-radioButtonColor  checked:border-radioButtonColor focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer mt-[2px]'
            type='radio'
          />
          <label
            className='form-check-label inline-block text-gray-800 font-semibold'
            htmlFor='flexRadioDefault1'
          >
            {value1}
          </label>
        </div>
        <div className='form-check'>
          <input
            className='rounded-full appearance-none  h-5 w-5 border-2  border-radioButtonColor bg-white checked:bg-radioButtonColor  checked:border-radioButtonColor focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer mt-[2px]'
            type='radio'
          />
          <label
            className='form-check-label inline-block text-gray-800 font-semibold'
            htmlFor='flexRadioDefault2'
          >
            {value2}
          </label>
        </div>
      </div>
    </div>
  )
}

export default RadioButton
