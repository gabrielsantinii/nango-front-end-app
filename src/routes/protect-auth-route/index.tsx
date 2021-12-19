import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../auth/hooks/contexts";

export const ProtectAuthRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
    const { auth } = useAuthContext();
    // const authed = !!auth;
    const authed = true
    return authed ? children : <Navigate to={{ pathname: "login" }} />
};
