import * as yup from 'yup';

const validations = yup.object({
    email: yup.string()
        .email("Geçerli bir e-mail giriniz.")
        .required("Zorun Alan"),
    password: yup.string()
        .min(8, "Parolanız en az 8 karakter olmalıdır.")
        .required(""),
    // passwordConfirm: yup.string()
    //     .oneOf([yup.ref('password')], "Parolalar uyuşmuyor.").
    //     required("Zorunlu Alan"),
});

export default validations;