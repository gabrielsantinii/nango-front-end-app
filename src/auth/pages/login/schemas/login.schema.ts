import { object, string, SchemaOf } from "yup";
import { loginFormErrors } from "../errors";
import { LoginFormValues } from "../interfaces";

export const LoginSchema: SchemaOf<LoginFormValues> = object().shape({
    email: string().required(loginFormErrors.email.required).email(loginFormErrors.email.invalid),
    pass: string().required(loginFormErrors.pass.required),
});
