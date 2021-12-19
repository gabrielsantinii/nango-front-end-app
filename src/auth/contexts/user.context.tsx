import { createContext, useCallback, useEffect, useState } from "react";
import { IUserContext } from "./interfaces";
import { userContextController } from "./controllers";
import { ReadAuthDto, ReadUserDto } from "../dtos";
import { ContextProviderProps } from "../../shared/interfaces";

export const UserContext = createContext({} as IUserContext);

export function UserContextProvider({ children }: ContextProviderProps) {
    const [auth, setAuth] = useState<ReadAuthDto | null>(null);
    const [user, setUser] = useState<ReadUserDto | null>(null);;

    useEffect(() => () => userContextController.identifyUserAuth(setAuth), []);
    useEffect(() => {
        if (!auth) return;
        userContextController.getUserByAuthId(auth?.uid, setUser);
    }, [auth]);

    const signOut = useCallback(() => userContextController.signOut(setAuth, setUser), []);

    return <UserContext.Provider value={{ auth, user, signOut }}>{children}</UserContext.Provider>;
}
