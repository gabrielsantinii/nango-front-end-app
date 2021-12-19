import { ReadAuthDto, ReadUserDto } from "../../dtos";

export interface IAuthContext {
    auth: ReadAuthDto | null;
    user: ReadUserDto | null;
    signOut: () => void;
    isFetchingAuth: boolean;
}