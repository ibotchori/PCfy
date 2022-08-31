/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import {
  GoBackButton,
  Input,
  MainLogo,
  PageTitle,
  Select,
  SubmitButton,
} from 'components'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EmployeeSchema } from 'helpers/validationSchema/EmployeeSchema'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
// actions
import {
  fetchPositions,
  fetchTeams,
  setEmail,
  setName,
  setPhoneNumber,
  setSelectedPosition,
  setSelectedTeam,
  setSurname,
} from 'features/employee/employeeSlice'

const EmployeeInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // fetch data
  useEffect(() => {
    dispatch(fetchTeams())
    dispatch(fetchPositions())
  }, [dispatch])

  //  Global state (Redux)
  const fetchedTeams = useSelector((state) => state.employeeInfo.fetchedTeams)

  const fetchedPositions = useSelector(
    (state) => state.employeeInfo.fetchedPositions
  )
  const selectedTeam = useSelector((state) => state.employeeInfo.selectedTeam)
  const selectedPosition = useSelector(
    (state) => state.employeeInfo.selectedPosition
  )

  /* Logic for select's options */
  let selectedTeamObject = fetchedTeams.filter(
    (item) => item.name === selectedTeam
  )
  let filteredPositions = fetchedPositions.filter(
    (item) => item.team_id === selectedTeamObject[0]?.id
  )
  let selectedPositionObject = filteredPositions.filter(
    (item) => item.name === selectedPosition
  )
  /* Logic for select's options END */

  /* Use Form */
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(EmployeeSchema),
  })

  useEffect(() => {
    dispatch(setSelectedTeam(watch('team')))
    dispatch(setSelectedPosition(watch('position')))
    dispatch(setName(watch('name')))
    dispatch(setSurname(watch('surname')))
    dispatch(setEmail(watch('email')))
    dispatch(setPhoneNumber(watch('phone_number')))
  }, [watch(), dispatch])

  const onSubmit = (data) => {
    // save entire objects on submit
    dispatch(setSelectedTeam(selectedTeamObject))
    dispatch(setSelectedPosition(selectedPositionObject))

    navigate('/laptop-info')
  }

  return (
    <div className='bg-gray-100 w-full min-h-screen flex flex-col justify-between'>
      {/* Go Back Button */}
      <GoBackButton path='/' />
      {/* Title */}
      <PageTitle path='/' />
      {/* Main Content */}
      <div className='flex justify-center h-full'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=' w-full sm:w-[60%]   bg-white rounded-xl  lg:px-28 pt-8 sm:pt-16 '
        >
          <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='name'
                label='სახელი'
                register={register}
                errorMessage={errors.name?.message}
                dirtyFields={dirtyFields.name}
                hint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
              />
            </div>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='surname'
                label='გვარი'
                register={register}
                errorMessage={errors.surname?.message}
                dirtyFields={dirtyFields.surname}
                hint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
              />
            </div>
          </div>
          <div className='flex justify-between flex-col gap-4 w-[21.875rem] sm:w-[25rem] lg:w-full m-auto'>
            <Select
              label='თიმი'
              name='team'
              options={fetchedTeams}
              register={register}
              error={errors.team?.message}
            />
            <Select
              label='პოზიცია'
              name='position'
              disabled={!selectedTeam ? true : false}
              options={filteredPositions}
              register={register}
              error={errors.position?.message}
            />
          </div>
          <div className=' w-[21.875rem] sm:w-[25rem] lg:w-full m-auto pt-0 lg:pt-5 pb-10 lg:pb-24 gap-3 sm:gap-8 flex flex-col '>
            <Input
              name='email'
              label='მეილი'
              register={register}
              errorMessage={errors.email?.message}
              dirtyFields={dirtyFields.email}
              hint='უნდა მთავრდებოდეს @redberry.ge-ით'
            />
            <Input
              name='phone_number'
              label='ტელეფონის ნომერი'
              register={register}
              errorMessage={errors.phone_number?.message}
              dirtyFields={dirtyFields.phone_number}
              hint='უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'
            />
          </div>
          {/* Footer */}
          <div className='w-full flex pr-3 lg:pr-0  pb-14 justify-end'>
            <SubmitButton text='შემდეგი' px='px-10' />
          </div>
        </form>
      </div>

      {/* Redberry Logo */}
      <MainLogo />
    </div>
  )
}

export default EmployeeInfo
