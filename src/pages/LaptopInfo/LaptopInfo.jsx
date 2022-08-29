import {
  Button,
  GoBackButton,
  Input,
  MainLogo,
  PageTitle,
  RadioButton,
  Select,
} from 'components'
import { Link } from 'react-router-dom'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { CameraIcon } from 'assets'

const LaptopInfo = () => {
  /* File Upload Functional */
  const [image, setImage] = useState('')
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files

    setImage(acceptedFiles[0].name)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/jpeg': ['.jpeg', '.png'],
    },
  })

  /* File Upload Functional END */

  return (
    <div className='bg-gray-100 w-full h-full flex flex-col justify-between'>
      {/* Go Back Button */}
      <GoBackButton path='/employ-info' />
      {/* Title */}
      <PageTitle path='/employ-info' />
      {/* Main Content */}
      <div className='flex justify-center h-full'>
        <form className=' w-full sm:w-[60%]  bg-white rounded-xl  lg:px-28 pt-8 sm:pt-16 '>
          <div className='divide-y-[16px] sm:divide-y-2 sm:divide-gray-200 divide-gray-100'>
            {/* Divide 1 */}
            <div className=''>
              {/* File Upload */}
              <div className='lg:px-0 px-5'>
                <div
                  {...getRootProps()}
                  className={`mb-10 h-[16rem] sm:h-[27rem] ${
                    isDragActive ? 'bg-gray-200' : 'bg-gray-100'
                  }  flex flex-col justify-evenly px-6 pt-5 pb-6 border-2 border-[#4386A9] border-dashed rounded-lg  `}
                >
                  <div className='w-full flex lg:hidden justify-center '>
                    <img src={CameraIcon} alt='' />
                  </div>

                  {image ? (
                    <p className='pt-0 lg:pt-16 text-xl font-semibold text-center w-60 mx-auto leading-relaxed text-[#4386A9] '>
                      ფაილი დამატებულია: <p className='truncate ...'>{image}</p>
                    </p>
                  ) : (
                    <p className='pt-0 lg:pt-16 text-xl font-semibold text-center w-60 mx-auto leading-relaxed text-[#4386A9] '>
                      ჩააგდე ან ატვირთე ლეპტოპის ფოტო
                    </p>
                  )}

                  <div className='w-full flex justify-center'>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                      >
                        <input
                          {...getInputProps()}
                          id='file-upload'
                          name='laptop_image'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                    </div>
                  </div>

                  <div className='w-full items-center lg:flex justify-center hidden py-6 '>
                    <p
                      className={`px-20 py-3 w-[250px] cursor-pointer bg-mainButtonColor hover:bg-hoverButtonColor  focus:bg-focusButtonColor  rounded-lg  text-center  text-lg  tracking-wide text-white  font-semibold`}
                    >
                      ატვირთე
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='ლეპტოპის სახელი' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem] pt-8'>
                  <Select label='ლეპტოპის ბრენდი' />
                </div>
              </div>
            </div>
            {/* Divide 2 */}
            <div className='pt-3 lg:pt-10 pb-0 sm:pb-2'>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem] pt-8'>
                  <Select label='CPU' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='CPU-ს ბირთვი' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='CPU-ს ნაკადი' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='ლეპტოპის RAM (GB)' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <RadioButton
                    label='მეხსიერების ტიპი'
                    value1='SSD'
                    value2='HDD'
                  />
                </div>
              </div>
            </div>
            {/* Divide 3*/}
            <div className='pt-10 pb-5'>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-14'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='შეძენის რიცხვი (არჩევითი)' />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input label='ლეპტოპის ფასი' />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-14'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <RadioButton
                    label='ლეპტოპის მდგომარეობა'
                    value1='ახალი'
                    value2='მეორადი'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='flex w-full justify-between pb-14'>
            <Link
              to='/employ-info'
              className={`pl-4 lg:pl-0  rounded-lg  text-center  text-lg  tracking-wide text-mainButtonColor hover:text-hoverButtonColor  focus:text-focusButtonColor font-semibold`}
            >
              უკან
            </Link>
            <div className=' pr-3 lg:pr-0   '>
              <Button text='დამახსოვრება' path='/laptop-info' px='px-10' />
            </div>
          </div>
        </form>
      </div>

      {/* Redberry Logo */}
      <MainLogo />
    </div>
  )
}

export default LaptopInfo
