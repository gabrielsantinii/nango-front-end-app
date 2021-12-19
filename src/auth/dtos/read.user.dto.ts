import { UserProfileType } from "../enums";

export interface ReadUserDto {
    displayName: string;
    phone: string;
    email: string;
    profileType: UserProfileType;
}
