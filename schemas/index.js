import * as yup from 'yup';

const onlyDigit = /^\d+$/;

export const basicSchema = yup.object().shape({
    name: yup.string().required("*Required"),
    number: yup.string().matches(onlyDigit, {message: '*Only digits'}).required('*Required'),
    email:  yup.string().email("*Please enter valide email").required("*Required"),
    message: yup.string().required("*Required")

})