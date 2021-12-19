import { createContext, useCallback, useEffect, useState } from "react";
import { IAuthContext } from "./interfaces";
import { authContextController } from "./controllers";
import { ReadAuthDto, ReadUserDto } from "../dtos";
import { ContextProviderProps } from "../../shared/interfaces";

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: ContextProviderProps) {
    const [auth, setAuth] = useState<ReadAuthDto | null>(null);
    const [user, setUser] = useState<ReadUserDto | null>(null);;

    useEffect(() => () => authContextController.identifyUserAuth(setAuth), []);
    useEffect(() => {
        if (!auth) return;
        authContextController.getUserByAuthId(auth?.uid, setUser);
    }, [auth]);

    const signOut = useCallback(() => authContextController.signOut(setAuth, setUser), []);

    return <AuthContext.Provider value={{ auth, user, signOut }}>{children}</AuthContext.Provider>;
}
