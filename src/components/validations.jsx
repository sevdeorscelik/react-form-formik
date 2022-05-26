import * as Yup from "yup"

const validations = Yup.object().shape({
    name: Yup.string().required('Bitte geben Sie Ihren Namen ein'),
    email: Yup.string().email('*Bitte geben Sie eine gültige Email Adresse ein.').required('Bitte geben Sie Ihre E-Mail Adresse ein'),
    favoriteColor: Yup.string().oneOf(['pink', 'blue', 'yellow']).required('Bitte wählen Sie Ihre Lieblingsfarbe'),
    agree: Yup.boolean().required('Bitte akzeptieren Sie die Nutzungsbedingungen'),
})

export default validations