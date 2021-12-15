import { SelectInputOption } from "../../../../shared/components/inputs/select-input/interfaces";

export const inputOptions: Record<string, SelectInputOption[]> = {
    categories: [
        { value: "educação infantil", label: "Educação infantil" },
        { value: "fundamental", label: "Fundamental" },
        { value: "médio", label: "Médio" },
        { value: "superior (graduação)", label: "Superior (graduação)" },
        { value: "pós-graduação", label: "Pós-graduação" },
        { value: "mestrado", label: "Mestrado" },
        { value: "doutorado", label: "Doutorado" },
    ],
};

