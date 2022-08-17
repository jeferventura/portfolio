import * as yup from 'yup';


export const FormValidations = yup.object().shape({
    name: yup
        .string()
        .required('Nome precisa ser preenchido'),

    email: yup
        .string()
        .email("E-mail com o formato inválido")
        .required('E-mail não foi informado'),

    celular: yup
        .string()
        .required('Celular não foi informado'),

    mensagem: yup
        .string()
        .required('Mensagem não foi informado'),

})