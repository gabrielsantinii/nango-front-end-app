import { SelectInputOption } from "../../../../shared/components/inputs/select-input/interfaces";

export interface SignupFormValues {
    name: string;
    categories: SelectInputOption[];
    website?: string;
    address: {
        state: string;
        city: string;
        postalCode?: string;
        street?: string;
        country: string
        neighborhood?: string;
    };
    rangeOfEmployees: SelectInputOption;
    rangeOfStudents: SelectInputOption;
    contactPerson: {
        name: string;
        email: string;
        phone: string;
    };
}