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
    rangeOfEmployees: [
        { value: "1 - 10", label: "1 - 10" },
        { value: "11 - 50", label: "11 - 50" },
        { value: "51 - 100", label: "51 - 100" },
        { value: "101 - 200", label: "101 - 200" },
        { value: "201 - 500", label: "201 - 500" },
        { value: "501 - 1000", label: "501 - 1000" },
        { value: "Mais de 1000", label: "Mais de 1000" },
    ],
    rangeOfStudents: [
        { value: "1 - 10", label: "1 - 10" },
        { value: "11 - 50", label: "11 - 50" },
        { value: "51 - 100", label: "51 - 100" },
        { value: "101 - 200", label: "101 - 200" },
        { value: "201 - 500", label: "201 - 500" },
        { value: "501 - 1000", label: "501 - 1000" },
        { value: "Mais de 1000", label: "Mais de 1000" },
    ],
};
