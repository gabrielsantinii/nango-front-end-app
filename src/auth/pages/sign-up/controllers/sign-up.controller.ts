import { UseFormReturn } from "react-hook-form";
import { delay } from "../../../../shared/helpers";
import { UseNavigation } from "../../../../shared/hooks/use-navigation/interfaces";
import { firebaseService } from "../../../../shared/providers/firebase/services";
import { notificationsService } from "../../../../shared/services/notifications";
import { LoginService } from "../../login/services/login.service";
import { Signup, SignupFormValues } from "../interfaces";
import { SignupService } from "../services";

const signupService = new SignupService();
export class SignupController {
    constructor(private readonly formMethods: UseFormReturn<SignupFormValues>) {}

    // separado por index, visto que os steps são abordados em index também.
    private readonly fieldsByStep = [
        ["name", "categories", "rangeOfEmployees", "rangeOfStudents", "website"],
        ["address.postalCode", "address.street", "address.neighborhood", "address.city", "address.state"],
        [
            "contactPerson.firstName",
            "contactPerson.lastName",
            "contactPerson.phone",
            "contactPerson.email",
            "contactPerson.pass",
        ],
    ];

    private validateStep = async (step: number): Promise<boolean> => {
        const fieldsToValidate = this.fieldsByStep[step];
        const isValid = await this.formMethods.trigger(fieldsToValidate as any, { shouldFocus: true });
        return isValid;
    };

    public advanceStep = async (currentStep: number, setNextStep: VoidFunction, navigation: UseNavigation) => {
        const values = this.formMethods.getValues();
        const formIsValid = await this.validateStep(currentStep);
        if (!formIsValid) return;
        try {
            if (currentStep === 2) {
                const signupAndLogin = async () => {
                    await this.signupAndCreateInstitution(values);
                    navigation.goToHomePage();
                };

                notificationsService.promise(signupAndLogin(), {
                    error: "Não foi possível cadastrar a instituição.",
                    loading: "Cadastrando instituição...",
                    success: "Instituição cadastrada com sucesso!",
                });
            }
            setNextStep();
        } catch (err: any) {
            notificationsService.error(err.message);
        }
    };

    private signupAndCreateInstitution = async (values: SignupFormValues) => {
        const formattedValues = this.formatSelectInputValuesToString(values);
        await signupService.createInstitutionAndUser(formattedValues);
        await delay(1000);
        await this.loginCreatedUser(formattedValues.contactPerson.email, formattedValues.contactPerson.pass);
    };

    private formatSelectInputValuesToString = (values: SignupFormValues): Signup => {
        return {
            ...values,
            categories: values.categories.map((c) => c.value),
            rangeOfEmployees: values.rangeOfEmployees.value,
            rangeOfStudents: values.rangeOfStudents.value,
        };
    };

    private loginCreatedUser = async (email: string, pass: string) => {
        const loginService = new LoginService(firebaseService.getAuth());
        await loginService.login(email, pass);
    };
}
