import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../auth/hooks/contexts";

export const RedirectIfAuthed = ({ children }: { children: JSX.Element }): JSX.Element => {
    const { auth } = useAuthContext();
    const authed = !!auth;
    return authed ? <Navigate to={{ pathname: "/" }} /> : children 
};
