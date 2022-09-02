/* eslint-disable no-unused-vars */
import { BackArrow, GoBackButton } from 'components'
import { fetchLaptop } from 'features/laptopInfo/laptopInfoSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const LaptopDetailedInfo = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { fetchedLaptop } = useSelector((state) => state.laptopInfo)

  // fetch data
  useEffect(() => {
    dispatch(fetchLaptop(params.id))
  }, [dispatch])

  return (
    <div className='min-h-screen w-full '>
      <div className='absolute'>
        <GoBackButton path={'/laptop-list'} />
      </div>

      <div className='flex flex-col items-center justify-center py-5 sm:pt-14'>
        <div className='flex'>
          <p className='font-bold text-xl sm:text-3xl'>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</p>
          <div className='sm:hidden block'>
            <BackArrow path={'/laptop-list'} />
          </div>
        </div>

        <div className=' items-center flex justify-center py-5 sm:py-14 w-[95%] sm:w-[65%]  '>
          {/* Divide */}
          <div className=' w-full divide-y-2  divide-gray-200 '>
            {/* Divide 1 */}
            <div className='pb-7 lg:pb-14'>
              <div className='w-full flex flex-col lg:flex-row  justify-start p-[0.45rem] space-x-0 lg:space-x-12'>
                <div className='w-full lg:w-[50%]'>
                  <img
                    className='w-full lg:w-[95%] h-[12rem] sm:h-[18.375rem] bg-gray-300  flex-shrink-0 object-cover object-top rounded-md transition duration-500 group-hover:rounded-xl'
                    src={`https://pcfy.redberryinternship.ge${fetchedLaptop.laptop?.image}`}
                    alt='PC'
                  />
                </div>

                <div className='flex lg:gap-[8rem] items-center '>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7 truncate  text-xs lg:text-sm font-semibold pt-8 lg:pt-0'>
                    <p>სახელი:</p>
                    <p>თიმი:</p>
                    <p>პოზიცია:</p>
                    <p>მეილი:</p>
                    <p>ტელ. ნომერი:</p>
                  </div>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7 font-light  text-xs lg:text-sm  pt-8 lg:pt-0'>
                    <p>{fetchedLaptop.user?.name}</p>
                    <p>{fetchedLaptop.user?.team_id}</p>
                    <p>{fetchedLaptop.user?.position_id}</p>
                    <p>{fetchedLaptop.user?.email}</p>
                    <p>{fetchedLaptop.user?.phone_number}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Divide 2 */}
            <div className='py-5 lg:py-8 '>
              <div className='w-full flex flex-col lg:flex-row  justify-start p-[0.45rem] space-x-0 lg:space-x-12 '>
                <div className='flex lg:gap-28 items-center w-full lg:w-[50%] '>
                  <div className='flex w-full lg:w-[90%]'>
                    <div className='flex-1 flex flex-col gap-2 lg:gap-7 truncate  text-xs lg:text-sm font-semibold  '>
                      <p>ლეპტოპის სახელი:</p>
                      <p>ლეპტოპის ბრენდი:</p>
                      <p>RAM:</p>
                      <p>მეხსიერება:</p>
                    </div>
                    <div className='flex-1 flex flex-col gap-2 lg:gap-7 font-light   text-xs lg:text-sm  '>
                      <p>{fetchedLaptop.laptop?.name}</p>
                      <p>{fetchedLaptop.laptop?.brand_id}</p>
                      <p>{fetchedLaptop.laptop?.ram}</p>
                      <p>{fetchedLaptop.laptop?.hard_drive_type}</p>
                    </div>
                  </div>
                </div>
                <div className='flex lg:gap-28 items-center '>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7 truncate pt-2 lg:pt-0  text-xs lg:text-sm font-semibold '>
                    <p>CPU:</p>
                    <p className='w-40'>CPU-ს ბირთვი:</p>
                    <p>CPU-ს ნაკადი:</p>
                    <p className='lg:invisible lg:block hidden'>hidden text</p>
                  </div>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7 font-light   text-xs lg:text-sm  '>
                    <p>{fetchedLaptop.laptop?.cpu?.name}</p>
                    <p>{fetchedLaptop.laptop?.cpu?.cores}</p>
                    <p>{fetchedLaptop.laptop?.cpu?.threads}</p>
                    <p className='lg:invisible lg:block hidden'>hidden text</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Divide 3 */}
            <div className='py-5 lg:py-8 '>
              <div className='w-full flex flex-col lg:flex-row  justify-start p-[0.45rem] space-x-0 lg:space-x-12 '>
                <div className='flex lg:gap-24 items-center w-full lg:w-[50%] '>
                  <div className='flex w-full lg:w-[90%]'>
                    <div className='flex-1 flex flex-col gap-2 lg:gap-7 truncate  text-xs lg:text-sm font-semibold  '>
                      <p>ლეპტოპის მდგომარეობა:</p>
                      <p>ლეპტოპის ფასი:</p>
                    </div>
                    <div className='flex-1 flex flex-col gap-2 lg:gap-7 font-light   text-xs lg:text-sm  '>
                      <p>
                        {fetchedLaptop.laptop?.state !== 'used'
                          ? 'ახალი'
                          : 'მეორადი'}
                      </p>
                      <p>{fetchedLaptop.laptop?.price} ₾</p>
                    </div>
                  </div>
                </div>
                <div className='flex lg:gap-24 items-center '>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7 truncate pt-2 lg:pt-0  text-xs lg:text-sm font-semibold '>
                    <p className='w-48'>შევსების რიცხვი:</p>
                    <p className='lg:invisible lg:block hidden'>hidden text</p>
                  </div>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7  font-light  text-xs lg:text-sm  '>
                    <p>{fetchedLaptop.laptop?.purchase_date}</p>

                    <p className='lg:invisible lg:block hidden'>hidden text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaptopDetailedInfo
