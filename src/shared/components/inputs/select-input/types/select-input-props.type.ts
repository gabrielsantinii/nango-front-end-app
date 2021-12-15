import { InputProps } from "../../types";
import { SelectInputOption } from "../interfaces";

export type SelectInputProps = InputProps & {
    isSearchable?: boolean;
    options: SelectInputOption[];
    defaultValue?: SelectInputOption;
    isMulti?: boolean;
};
