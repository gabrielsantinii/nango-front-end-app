import { object, string, SchemaOf, array } from "yup";
import { dontHaveNumbers } from "../../../../shared/helpers";
import { signupFormErrors } from "../errors";
import { SignupFormValues } from "../interfaces";

export const SignupSchema: SchemaOf<SignupFormValues> = object().shape({
    name: string().required(signupFormErrors.name.required),
    categories: array()
        .of(
            object().shape({
                label: string().required(),
                value: string().required(),
            })
        )
        .min(1, "Selecione pelo menos uma categoria.")
        .required("Selecione pelo menos uma categoria."),
    website: string(),
    contactPerson: object().shape({
        firstName: string()
            .required(signupFormErrors.contactPerson.firstName.required)
            .test("has-numbers", signupFormErrors.contactPerson.firstName.invalid, dontHaveNumbers),
        lastName: string().required(signupFormErrors.contactPerson.lastName.required)
        .test("has-numbers", signupFormErrors.contactPerson.lastName.invalid, dontHaveNumbers),
        email: string()
            .required(signupFormErrors.contactPerson.email.required)
            .email(signupFormErrors.contactPerson.email.invalid),

        phone: string()
            .required(signupFormErrors.contactPerson.phone.required)
            .min(7, signupFormErrors.contactPerson.phone.invalid)
            .max(12, signupFormErrors.contactPerson.phone.invalid),
        pass: string()
            .required(signupFormErrors.contactPerson.pass.required)
            .min(6, signupFormErrors.contactPerson.pass.min),
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
