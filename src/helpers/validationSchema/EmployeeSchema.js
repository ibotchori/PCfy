import * as yup from 'yup'

export const EmployeeSchema = yup.object().shape({
  name: yup
    .string()
    .required('სახელი სავალდებულოა.')
    .matches(/[\u10A0-\u10FF]$/, 'მხოლოდ ქართული სიმბოლოები.')
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .max(20, 'მაქსიმუმ 20 სიმბოლო.'),
  surname: yup
    .string()
    .required('გვარი სავალდებულოა.')
    .matches(/[\u10A0-\u10FF]$/, 'მხოლოდ ქართული სიმბოლოები.')
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .max(20, 'მაქსიმუმ 20 სიმბოლო.'),
  team: yup.string().required(),
  position: yup.string().required(),
  email: yup
    .string()
    .required('მეილი სავალდებულოა.')
    .email('გთხოვთ მიუთითოთ მეილის ფორმატით.')
    .matches(
      /^[A-Za-z0-9._%+-]+@redberry\.ge$/,
      'უნდა მთავრდებოდეს @redberry.ge-თი'
    ),
  phone_number: yup
    .string()
    .required('ტელეფონი სავალდებულოა.')
    .matches(
      /^(\+?995)?(79\d{7}|5\d{8})$/,
      'უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს'
    ),
})
