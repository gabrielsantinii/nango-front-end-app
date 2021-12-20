import { SignupServiceResponse } from ".";
import { api } from "../../../../shared/providers/api/services";
import { ReadUserDto } from "../../../dtos";
import { Signup } from "../interfaces";

export class SignupService {
    async createInstitutionAndUser(
        signupData: Signup
    ): Promise<{ message: string; data: ReadUserDto } | { error: string; message: string }> {
        const { data } = await api.post<SignupServiceResponse>("/institutions", signupData);
        return { data: data.data.createdUser, message: data.message };
    }
}
