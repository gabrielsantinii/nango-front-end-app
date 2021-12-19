import { UseFormReturn } from "react-hook-form";
import { UseNavigation } from "../../../../shared/hooks/use-navigation/interfaces";
import { notificationsService } from "../../../../shared/services/notifications";
import { SignupFormValues } from "../interfaces";

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
        try {
            const formIsValid = await this.validateStep(currentStep);
            if (!formIsValid) return;
            if (currentStep === 2) {
                await this.signupAndCreateInstitution();
            }
            setNextStep();
        } catch (err: any) {
            notificationsService.error(err.message);
        }
    };

    private signupAndCreateInstitution = async () => {};
}
