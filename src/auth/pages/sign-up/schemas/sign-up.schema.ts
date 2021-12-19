import { object, string, SchemaOf, array } from "yup";
import { signupFormErrors } from "../errors";
import { SignupFormValues } from "../interfaces";

export const SignupSchema: SchemaOf<SignupFormValues> = object().shape({
    name: string().required(),
    categories: array(),
    website: string(),
    contactPerson: object().shape({
        name: string().required(),
        email: string().required().email(),
        phone: string().required(),
    }),
    address: object().shape({
        state: string().required(),
        city: string().required(),
        street: string(),
        neighborhood: string(),
        country: string().required(),
        postalCode: string(),
    }),
    email: string().required().email(),
    rangeOfEmployees: object().shape({ label: string().required(), value: string().required() }),
    rangeOfStudents: object().shape({ label: string().required(), value: string().required() }),
});
