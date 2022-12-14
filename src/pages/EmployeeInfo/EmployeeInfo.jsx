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
import { EmployeeSchema } from 'Schema'
import useFormPersist from 'react-hook-form-persist'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
// actions
import {
  fetchPositions,
  fetchTeams,
  setEmail,
  setName,
  setPhoneNumber,
  setPositionID,
  setSelectedPosition,
  setSelectedTeam,
  setSurname,
  setTeamID,
} from 'features/employeeInfo/employeeInfoSlice'

const EmployeeInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // fetch data
  useEffect(() => {
    dispatch(fetchTeams())
    dispatch(fetchPositions())
  }, [dispatch])

  //  Global state (Redux)
  const { fetchedTeams, fetchedPositions, selectedTeam, selectedPosition } =
    useSelector((state) => state.employeeInfo)

  let selectedTeamObject = fetchedTeams.filter(
    (item) => item.name === selectedTeam
  )
  let filteredPositions = fetchedPositions.filter(
    (item) => item.team_id === selectedTeamObject[0]?.id
  )
  let selectedPositionObject = filteredPositions.filter(
    (item) => item.name === selectedPosition
  )

  /* Use Form */
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(EmployeeSchema),
  })
  useFormPersist('storageKey', {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
    exclude: ['baz'],
  })

  useEffect(() => {
    dispatch(setSelectedTeam(watch('team')))
    dispatch(setSelectedPosition(watch('position')))
    dispatch(setName(watch('name')))
    dispatch(setSurname(watch('surname')))
    dispatch(setEmail(watch('email')))
    dispatch(setPhoneNumber(watch('phone_number')))
    dispatch(setTeamID(selectedTeamObject[0]?.id))
    dispatch(setPositionID(selectedPositionObject[0]?.id))
  }, [watch(), dispatch])

  const onSubmit = (data) => {
    localStorage.setItem('selectedTeamID', selectedTeamObject[0]?.id)
    localStorage.setItem('selectedPositionID', selectedPositionObject[0]?.id)
    navigate('/laptop-info')
  }

  return (
    <div className='bg-gray-100 w-full min-h-screen flex flex-col justify-between'>
      <GoBackButton path='/' />
      <PageTitle path='/' />
      <div className='flex justify-center h-full'>
        <form
          encType='multipart/form-data'
          onSubmit={handleSubmit(onSubmit)}
          className=' w-full sm:w-[60%]   bg-white rounded-xl  lg:px-28 pt-8 sm:pt-16 '
        >
          <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='name'
                label='??????????????????'
                register={register}
                errorMessage={errors.name?.message}
                dirtyFields={dirtyFields.name}
                hint='????????????????????? 2 ?????????????????????, ????????????????????? ??????????????????'
              />
            </div>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='surname'
                label='???????????????'
                register={register}
                errorMessage={errors.surname?.message}
                dirtyFields={dirtyFields.surname}
                hint='????????????????????? 2 ?????????????????????, ????????????????????? ??????????????????'
              />
            </div>
          </div>
          <div className='flex justify-between flex-col gap-4 w-[21.875rem] sm:w-[25rem] lg:w-full m-auto'>
            <Select
              label='????????????'
              name='team'
              value={selectedTeam}
              options={fetchedTeams}
              register={register}
              error={errors.team?.message}
            />
            <Select
              label='?????????????????????'
              name='position'
              value={selectedPosition}
              disabled={!selectedTeam ? true : false}
              options={filteredPositions}
              register={register}
              error={errors.position?.message}
            />
          </div>
          <div className=' w-[21.875rem] sm:w-[25rem] lg:w-full m-auto pt-0 lg:pt-5 pb-10 lg:pb-24 gap-3 sm:gap-8 flex flex-col '>
            <Input
              name='email'
              label='???????????????'
              register={register}
              errorMessage={errors.email?.message}
              dirtyFields={dirtyFields.email}
              hint='???????????? ???????????????????????????????????? @redberry.ge-??????'
            />
            <Input
              name='phone_number'
              label='??????????????????????????? ??????????????????'
              register={register}
              errorMessage={errors.phone_number?.message}
              dirtyFields={dirtyFields.phone_number}
              hint='???????????? ?????????????????????????????????????????? ????????????????????? ?????????-?????????????????? ?????????????????????'
            />
          </div>
          <div className='w-full flex pr-3 lg:pr-0  pb-14 justify-end'>
            <SubmitButton text='?????????????????????' px='px-10' />
          </div>
        </form>
      </div>
      <MainLogo />
    </div>
  )
}

export default EmployeeInfo
