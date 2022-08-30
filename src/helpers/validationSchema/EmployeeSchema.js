import * as yup from 'yup'

export const EmployeeSchema = yup.object().shape({
  team: yup.string().required('თიმის მითითება სავალდებულოა.'),
  position: yup.string().required('პოზიციის მითითება სავალდებულოა.'),
})
