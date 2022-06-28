import * as yup from 'yup'

const schema = yup.object({
  email: yup
    .string()
    .email('E-mail must be valid.')
    .required('E-mail field is required'),
  password: yup.string().required('Password field is required')
})

export default schema
