import { UseFormReturn } from "react-hook-form";
import { LoginFormValues } from "../interfaces";
import { LoginService } from "../services/login.service";
import { loginServiceErrors } from "../errors";
import { firebaseService } from "../../../../shared/providers/firebase/services";
import { notificationsService } from "../../../../shared/services/notifications";

const loginService = new LoginService(firebaseService.getAuth());
export class LoginController {
    private readonly formMethods: UseFormReturn<LoginFormValues>;

    constructor(formMethods: UseFormReturn<LoginFormValues>) {
        console.log("User login controller mounted");
        this.formMethods = formMethods;
    }

    public login = async (data: LoginFormValues): Promise<void> => {
        try {
            await loginService.login(data.email, data.pass);
        } catch (err) {
            notificationsService.error(loginServiceErrors.notFound)
            this.formMethods.setError("email", { message: loginServiceErrors.notFound });
        }
    };
}
