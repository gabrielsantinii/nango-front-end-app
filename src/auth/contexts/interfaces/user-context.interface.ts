import { ReadAuthDto, ReadUserDto } from "../../dtos";

export interface IUserContext {
    auth: ReadAuthDto | null;
    user: ReadUserDto | null;
    signOut: () => void;
}