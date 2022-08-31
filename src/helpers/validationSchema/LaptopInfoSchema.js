import * as yup from 'yup'

export const LaptopInfoSchema = yup.object().shape({
  laptop_brand_id: yup.string().required(),
  laptop_name: yup
    .string()
    .required('სახელი სავალდებულოა.')
    .matches(/[\u10A0-\u10FF]$/, 'მხოლოდ ქართული სიმბოლოები.')
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .max(20, 'მაქსიმუმ 20 სიმბოლო.'),
})
