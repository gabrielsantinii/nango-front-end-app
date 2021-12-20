import { UserProfileType } from "../enums";

export interface ReadUserDto {
    firstName: string;
    lastName: string;
    displayName: string;
    phone: string;
    email: string;
    profileType: UserProfileType;
    institutions: string[];
    photoUrl?: string;
    authId: string;
    id: string;
}
