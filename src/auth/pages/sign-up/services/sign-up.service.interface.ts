import { ReadInstitutionDto } from "../../../../institutions/dtos/read.institution.dto";
import { ReadUserDto } from "../../../dtos";

export interface SignupServiceResponse {
    data: {
        createdUser: ReadUserDto;
        createdInstitution: ReadInstitutionDto;
    };
    message: string;
}
