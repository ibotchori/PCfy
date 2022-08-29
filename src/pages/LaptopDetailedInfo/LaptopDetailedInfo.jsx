import { BackArrow, GoBackButton } from 'components'
import React from 'react'

const LaptopDetailedInfo = () => {
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
          <div class=' w-full divide-y-2  divide-gray-200 '>
            {/* Divide 1 */}
            <div className='pb-7 lg:pb-14'>
              <div className='w-full flex flex-col lg:flex-row  justify-start p-[0.45rem] space-x-0 lg:space-x-12'>
                <div className='w-full lg:w-[50%]'>
                  <img
                    className='w-full lg:w-[95%] h-[12rem] sm:h-[18.375rem] bg-gray-300  flex-shrink-0 object-cover object-top rounded-md transition duration-500 group-hover:rounded-xl'
                    src='https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80'
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
                    <p>აკაკი წერეთელი</p>
                    <p>დიზაინერი</p>
                    <p>ილუსტრატორი</p>
                    <p>kosta@Redberry.ge</p>
                    <p>+995 577 45 80 12</p>
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
                      <p>Razor Basasdla Bla</p>
                      <p>Compaq</p>
                      <p>16as</p>
                      <p>SSsasdD</p>
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
                    <p>Intel 5asdas</p>
                    <p>1asda3</p>
                    <p>67asa</p>
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
                      <p>მეორადი</p>
                      <p>1500 ₾</p>
                    </div>
                  </div>
                </div>
                <div className='flex lg:gap-24 items-center '>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7 truncate pt-2 lg:pt-0  text-xs lg:text-sm font-semibold '>
                    <p className='w-44'>შევსების რიცხვი:</p>

                    <p className='lg:invisible lg:block hidden'>hidden text</p>
                  </div>
                  <div className='flex-1 flex flex-col gap-2 lg:gap-7  font-light  text-xs lg:text-sm  '>
                    <p>12 / 06 / 2022</p>
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
