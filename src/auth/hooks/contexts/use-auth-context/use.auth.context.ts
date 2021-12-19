import { useContext } from "react";
import { AuthContext } from "../../../../auth/contexts/auth.context";

export const useAuthContext = () => useContext(AuthContext)