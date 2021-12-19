import { SelectInputOption } from "../../../../../../../shared/components/inputs/select-input/interfaces";

export interface AddEmployeeFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profileType: SelectInputOption;
    role: string;
}
