import { object, string, SchemaOf, array } from "yup";
import { signupFormErrors } from "../errors";
import { SignupFormValues } from "../interfaces";

export const SignupSchema: SchemaOf<SignupFormValues> = object().shape({
    name: string().required(signupFormErrors.name.required),
    categories: array(),
    website: string(),
    contactPerson: object().shape({
        name: string().required(signupFormErrors.contactPerson.name.required),
        email: string()
            .required(signupFormErrors.contactPerson.email.required)
            .email(signupFormErrors.contactPerson.email.invalid),
        phone: string().required(signupFormErrors.contactPerson.phone.required),
    }),
    address: object().shape({
        state: string().required(signupFormErrors.address.state.required),
        city: string().required(signupFormErrors.address.city.required),
        street: string(),
        neighborhood: string(),
        country: string().required(),
        postalCode: string(),
    }),
    email: string().required().email(),
    rangeOfEmployees: object().shape({
        label: string().required(signupFormErrors.rangeOfEmployees.required),
        value: string().required(signupFormErrors.rangeOfEmployees.required),
    }),
    rangeOfStudents: object().shape({
        label: string().required(signupFormErrors.rangeOfStudents.required),
        value: string().required(signupFormErrors.rangeOfStudents.required),
    }),
});
