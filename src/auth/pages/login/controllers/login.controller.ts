import { UseFormReturn } from "react-hook-form";
import { LoginFormValues } from "../interfaces";
import { LoginService } from "../services/login.service";
import { loginServiceErrors } from "../errors";
import { firebaseService } from "../../../../shared/providers/firebase/services";
import { notificationsService } from "../../../../shared/services/notifications";
import { UseNavigation } from "../../../../shared/hooks/use-navigation/interfaces";

const loginService = new LoginService(firebaseService.getAuth());
export class LoginController {
    constructor(
        private readonly formMethods: UseFormReturn<LoginFormValues>,
        private readonly navigation: UseNavigation
    ) {}

    public login = async (data: LoginFormValues): Promise<void> => {
        const loginPromise = loginService.login(data.email, data.pass);
        notificationsService.promise(loginPromise, {
            error: loginServiceErrors.notFound,
            success: "Usuário logado com sucesso!",
            loading: "Buscando usuário...",
        });
        this.navigation.goToHomePage();
        loginPromise
            .then(() => this.navigation.goToHomePage())
            .catch(() => this.formMethods.setError("email", { message: loginServiceErrors.notFound }));
    };
}
