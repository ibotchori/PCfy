import React from 'react'

const Select = ({ label, id, name }) => {
  return (
    <div className='mb-6'>
      <select
        id={id}
        name={name}
        className='bg-gray-200 text-gray-900 text-sm rounded-lg  focus:outline-none  font-bold  block w-full p-[11px] border '
      >
        <option selected>{label}</option>
        <option value='US'>დეველოპმენტი</option>
        <option value='CA'>HR</option>
        <option value='FR'>გაყიდვები</option>
        <option value='DE'>დიზაინი</option>
        <option value='DE'>მარკეტინგი</option>
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
