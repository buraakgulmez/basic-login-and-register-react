import * as yup from 'yup';

const validations_register = yup.object({
    firstname: yup.string(),
    lastname: yup.string(),
    email: yup.string()
        .email("Geçerli bir e-mail giriniz.")
        .required("Zorun Alan"),
    password: yup.string()
        .min(8, "Parolanız en az 8 karakter olmalıdır.")
        .required("Zorunlu Alan"),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password')], "Parolalar uyuşmuyor.").
        required("Zorunlu Alan"),
});

export default validations_register;