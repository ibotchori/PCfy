import { CameraIcon, ErrorIcon } from 'assets'
import {
  setLaptopImage,
  setUploadImageError,
} from 'features/laptopInfo/laptopInfoSlice'
import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const ImageUpload = () => {
  const dispatch = useDispatch()

  //  Global state (Redux)
  const { laptop_image, uploadImageError } = useSelector(
    (state) => state.laptopInfo
  )

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles[0].size > 900000) {
        dispatch(setLaptopImage({}))
        toast.warn('ლეპტოპის სურათი არ უნდა იყოს 900 კილობაიტზე მეტი.')
        dispatch(setUploadImageError(true))
        return
      }
      // Do something with the files
      dispatch(setLaptopImage(acceptedFiles[0]))
    },
    [dispatch]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/jpeg': ['.jpeg', '.png'],
    },
  })

  useEffect(() => {
    if (laptop_image.name) {
      dispatch(setUploadImageError(false))
    }
  }, [laptop_image.name, dispatch])

  return (
    <div className='lg:px-0 px-5'>
      <div
        {...getRootProps()}
        className={`mb-10 h-[16rem] sm:h-[27rem] ${
          isDragActive
            ? 'bg-gray-200'
            : uploadImageError
            ? 'bg-red-50'
            : 'bg-gray-100'
        }  flex flex-col justify-evenly px-6 pt-5 pb-6 border-2 ${
          uploadImageError ? 'border-red-500' : 'border-[#4386A9] '
        } border-dashed rounded-lg  `}
      >
        <div className='w-full flex lg:hidden justify-center '>
          <img src={CameraIcon} alt='' />
        </div>

        {laptop_image.name ? (
          <div
            className={`pt-0 lg:pt-16 text-xl font-semibold text-center w-60 mx-auto leading-relaxed  text-[#4386A9]  `}
          >
            ფოტო დამატებულია:{' '}
            <p className='truncate ...'>{laptop_image.name}</p>
          </div>
        ) : (
          <p
            className={`flex lg:flex-col flex-col-reverse  pt-0  text-xl font-semibold text-center w-60 mx-auto leading-relaxed  ${
              uploadImageError ? 'text-red-500' : 'text-[#4386A9] '
            } `}
          >
            <img
              className={`w-6 lg:w-10  m-auto py-3 ${
                uploadImageError ? 'visible' : 'invisible'
              }`}
              src={ErrorIcon}
              alt='error'
            />
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
  )
}

export default ImageUpload
