import * as Yup from 'yup';

export const PRODUCT_VALIDATION_SCHEMA = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(3, 'Must be 3-20 characters long')
    .max(20, 'Must be 3-20 characters long'),
  price: Yup.number().required('Required').positive(),
  origin: Yup.string().required('Required'),
})