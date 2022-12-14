import * as yup from 'yup'

const LaptopInfoSchema = yup.object().shape({
  laptop_name: yup
    .string()
    .required('ლეპტოპის სახელი სავალდებულოა.')
    .matches(
      /^[ A-Za-z0-9_!@#$%^&*()_+=]*$/,
      'მხოლოდ ლათინური ასოები, ციფრები და !@#$%^&*()_+='
    ),
  laptop_brand: yup.string().required(),
  laptop_cpu: yup.string().required(),
  laptop_cpu_cores: yup.number().required().typeError('მხოლოდ ციფრები.'),
  laptop_cpu_threads: yup.number().required().typeError('მხოლოდ ციფრები.'),
  laptop_ram: yup.number().required().typeError('მხოლოდ ციფრები.'),
  laptop_price: yup.number().required().typeError('მხოლოდ ციფრები.'),
  laptop_hard_drive_type: yup.string().required(),
  laptop_state: yup.string().required(),
})

export default LaptopInfoSchema
