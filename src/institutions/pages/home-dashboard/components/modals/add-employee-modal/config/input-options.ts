import { SelectInputOption } from "../../../../../../../shared/components/inputs/select-input/interfaces";

export const inputOptions: Record<string, SelectInputOption[]> = {
    profileType: [
        { value: "admin", label: "Administração" },
        { value: "educator", label: "Professor" },
    ],
};
