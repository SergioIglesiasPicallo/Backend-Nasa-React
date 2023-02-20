import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato no valido')
    .required(' Email requerido'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
})

export const initialValues = {
  email: '',
  password: '',
}