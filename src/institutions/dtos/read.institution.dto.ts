import { Address } from "../../shared/interfaces";

export interface ReadInstitutionDto {
    name: string;
    website?: string;
    rangeOfStudents: string;
    rangeOfEmployees: string;
    periodEndDate: Date;
    categories: string[];
    photoUrl?: string;
    address: Address;
    id: string;
}
