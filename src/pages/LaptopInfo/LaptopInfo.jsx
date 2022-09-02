/* eslint-disable no-unused-vars */
import {
  GoBackButton,
  ImageUpload,
  Input,
  MainLogo,
  PageTitle,
  RadioButton,
  Select,
  SubmitButton,
} from 'components'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
/* Redux */
import { useSelector, useDispatch } from 'react-redux'
// actions
import {
  fetchBrands,
  fetchCPUs,
  setLaptopBrandId,
  setLaptopCPU,
  setLaptopCPUCores,
  setLaptopCPUThreads,
  setLaptopHardDriveType,
  setLaptopName,
  setLaptopPrice,
  setLaptopPurchaseDate,
  setLaptopRam,
  setLaptopState,
  setSelectedLaptopBrand,
  setUploadImageError,
  submitData,
} from 'features/laptopInfo/laptopInfoSlice'
import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'
import { yupResolver } from '@hookform/resolvers/yup'
import { LaptopInfoSchema } from 'helpers/validationSchema/LaptopInfoSchema'

const LaptopInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // fetch data
  useEffect(() => {
    dispatch(fetchBrands())
    dispatch(fetchCPUs())
  }, [dispatch])

  //  Global state (Redux)
  const {
    fetchedBrands,
    fetchedCPUs,
    selectedLaptopBrand,
    laptop_cpu,
    laptop_hard_drive_type,
    laptop_state,
    laptop_name,
    laptop_image,
    laptop_brand_id,
    laptop_purchase_date,
    laptop_cpu_cores,
    laptop_cpu_threads,
    laptop_ram,
    laptop_price,
  } = useSelector((state) => state.laptopInfo)
  const { name, surname, team_id, position_id, email, phone_number } =
    useSelector((state) => state.employeeInfo)

  /* Use Form */
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LaptopInfoSchema),
  })

  useFormPersist('storageKey', {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
    exclude: ['baz'],
  })

  let selectedLaptopBrandObject = fetchedBrands.filter(
    (item) => item.name === selectedLaptopBrand
  )

  useEffect(() => {
    dispatch(setLaptopName(watch('laptop_name')))
    dispatch(setSelectedLaptopBrand(watch('laptop_brand')))
    dispatch(setLaptopCPU(watch('laptop_cpu')))
    dispatch(setLaptopCPUCores(watch('laptop_cpu_cores')))
    dispatch(setLaptopCPUThreads(watch('laptop_cpu_threads')))
    dispatch(setLaptopRam(watch('laptop_ram')))
    dispatch(setLaptopPrice(watch('laptop_price')))
    dispatch(setLaptopPurchaseDate(watch('laptop_purchase_date')))
    dispatch(setLaptopHardDriveType(watch('laptop_hard_drive_type')))
    dispatch(setLaptopState(watch('laptop_state')))

    dispatch(setLaptopBrandId(selectedLaptopBrandObject[0]?.id))
  }, [watch(), dispatch])

  // prepare data for submit
  const formData = new FormData()

  formData.append('name', name)
  formData.append('surname', surname)
  formData.append('team_id', team_id)
  formData.append('position_id', position_id)
  formData.append('email', email)
  formData.append('phone_number', phone_number)
  formData.append('laptop_name', laptop_name)
  formData.append('laptop_image', laptop_image)
  formData.append('laptop_brand_id', laptop_brand_id)
  formData.append('laptop_cpu', laptop_cpu)
  formData.append('laptop_cpu_cores', laptop_cpu_cores)
  formData.append('laptop_cpu_threads', laptop_cpu_threads)
  formData.append('laptop_ram', laptop_ram)
  formData.append('laptop_hard_drive_type', laptop_hard_drive_type)
  formData.append('laptop_state', laptop_state)
  formData.append('laptop_purchase_date', laptop_purchase_date)
  formData.append('laptop_price', laptop_price)
  formData.append('token', '5e58375285e927fe3f2ae52b4b607811')

  const onSubmit = (data) => {
    if (!laptop_image.name) {
      dispatch(setUploadImageError(true))
      return
    }
    dispatch(submitData(formData))
    navigate('/successful')
  }

  return (
    <div className='bg-gray-100 w-full h-full flex flex-col justify-between'>
      {/* Go Back Button */}
      <GoBackButton path='/employ-info' />
      {/* Title */}
      <PageTitle path='/employ-info' />
      {/* Main Content */}
      <div className='flex justify-center h-full'>
        <form
          encType='multipart/form-data'
          onSubmit={handleSubmit(onSubmit)}
          className=' w-full sm:w-[60%]  bg-white rounded-xl  lg:px-28 pt-8 sm:pt-16 '
        >
          <div className='divide-y-[16px] sm:divide-y-2 sm:divide-gray-200 divide-gray-100'>
            {/* Divide 1 */}
            <div className=''>
              <ImageUpload />
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input
                    name='laptop_name'
                    label='ლეპტოპის სახელი'
                    register={register}
                    errorMessage={errors.laptop_name?.message}
                    dirtyFields={dirtyFields.laptop_name}
                    hint='ლათინური ასოები, ციფრები, !@#$%^&*()_+='
                  />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem] pt-8'>
                  <Select
                    label='ლეპტოპის ბრენდი'
                    name='laptop_brand'
                    value={selectedLaptopBrand}
                    options={fetchedBrands}
                    register={register}
                    error={errors.laptop_brand?.message}
                  />
                </div>
              </div>
            </div>
            {/* Divide 2 */}
            <div className='pt-3 lg:pt-10 pb-0 sm:pb-2'>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem] pt-8'>
                  <Select
                    label='CPU'
                    name='laptop_cpu'
                    value={laptop_cpu}
                    options={fetchedCPUs}
                    register={register}
                    error={errors.laptop_cpu?.message}
                  />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input
                    type={'number'}
                    name='laptop_cpu_cores'
                    label='CPU-ს ბირთვი'
                    register={register}
                    errorMessage={errors.laptop_cpu_cores?.message}
                    dirtyFields={dirtyFields.laptop_cpu_cores}
                    hint='მხოლოდ ციფრები.'
                  />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input
                    label='CPU-ს ნაკადი'
                    type={'number'}
                    name='laptop_cpu_threads'
                    register={register}
                    errorMessage={errors.laptop_cpu_threads?.message}
                    dirtyFields={dirtyFields.laptop_cpu_threads}
                    hint='მხოლოდ ციფრები.'
                  />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input
                    label='ლეპტოპის RAM (GB)'
                    type={'number'}
                    name='laptop_ram'
                    register={register}
                    errorMessage={errors.laptop_ram?.message}
                    dirtyFields={dirtyFields.laptop_ram}
                    hint='მხოლოდ ციფრები.'
                  />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <RadioButton
                    title='მეხსიერების ტიპი'
                    name='laptop_hard_drive_type'
                    label1='SSD'
                    label2='HDD'
                    value1='SSD'
                    value2='HDD'
                    register={register}
                    errorMessage={errors.laptop_hard_drive_type?.message}
                    dirtyFields={dirtyFields.laptop_hard_drive_type}
                    checked1={laptop_hard_drive_type === 'SSD'}
                    checked2={laptop_hard_drive_type === 'HDD'}
                  />
                </div>
              </div>
            </div>
            {/* Divide 3*/}
            <div className='pt-10 pb-5'>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-14'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input
                    label='შეძენის რიცხვი (არჩევითი)'
                    type={'date'}
                    name='laptop_purchase_date'
                    register={register}
                    placeholder='დდ/თთ/წწწწ'
                  />
                </div>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <Input
                    label='ლეპტოპის ფასი'
                    type={'number'}
                    name='laptop_price'
                    register={register}
                    errorMessage={errors.laptop_price?.message}
                    dirtyFields={dirtyFields.laptop_price}
                    placeholderIcon={true}
                    hint='მხოლოდ ციფრები.'
                  />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-14'>
                <div className='w-[21.875rem] sm:w-[25rem]'>
                  <RadioButton
                    title='ლეპტოპის მდგომარეობა'
                    label1='ახალი'
                    label2='მეორადი'
                    value1='new'
                    value2='used'
                    name='laptop_state'
                    register={register}
                    errorMessage={errors.laptop_state?.message}
                    dirtyFields={dirtyFields.laptop_state}
                    checked1={laptop_state === 'SSD'}
                    checked2={laptop_state === 'HDD'}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='flex w-full justify-between pb-14'>
            <Link
              to='/employ-info'
              className={`pl-4 lg:pl-0 pt-3 rounded-lg  text-center  text-lg  tracking-wide text-mainButtonColor hover:text-hoverButtonColor  focus:text-focusButtonColor font-semibold`}
            >
              უკან
            </Link>
            <div className=' pr-3 lg:pr-0   '>
              <SubmitButton text='დამახსოვრება' px='px-10' />
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
